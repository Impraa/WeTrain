import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: "../.env" });
}

import QRCode from "qrcode";
import express, { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import multer from "multer";
import User from "../models/user";
import { Model } from "sequelize";
import Jwt from "jsonwebtoken";
import { User as UserInter } from "../../types/User";
import { sendChangePass, sendVerifyLink } from "../utils/sendEmail";
import path from "path";
import sharp from "sharp";
import fs from "fs";

const router = express.Router();

router.post("/register", async (req: Request, res: Response) => {
  try {
    const {
      fName,
      lName,
      username,
      email,
      birthday,
      gender,
      password,
      image,
      role,
    } = req.body;

    if (!fName || !lName || !username || !email || !password || !gender) {
      return res.status(400).json("Error missing manditory fields");
    }

    const hashPassword = bcrypt.hashSync(password, 10);

    const userData = {
      fName: fName,
      lName: lName,
      email,
      username,
      birthday,
      gender,
      password: hashPassword,
      image,
      role,
    };

    const qrCodeDataURL = await QRCode.toDataURL(JSON.stringify(userData));

    const user = await User.create({
      fName: fName,
      lName: lName,
      email,
      username,
      birthday,
      gender,
      password: hashPassword,
      image,
      role,
      verified: false,
      qrCode: qrCodeDataURL,
    });

    sendVerifyLink(user.dataValues as UserInter, user.dataValues.email);

    const token = Jwt.sign(user.dataValues, process.env.SECRET || "tajna", {
      expiresIn: "1h",
    }).toString();

    res.status(201).json(token);
  } catch (error) {
    res.status(500).send("Database error " + error);
  }
});

router.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json("Error missing manditory fields");
    }

    const user = (await User.findOne({
      where: {
        email: email,
      },
    })) as Model<UserInter>;

    if (!bcrypt.compareSync(password, user.dataValues.password)) {
      return res.status(404).json("Email or password incorrect");
    }

    const token = Jwt.sign(user.dataValues, process.env.SECRET || "tajna", {
      expiresIn: "1h",
    }).toString();

    res.status(200).json(token);
  } catch (error) {
    res.status(500).json("Failed to retrieve the user");
  }
});

router.post("/verify", async (req: Request, res: Response) => {
  try {
    const { id } = req.body;

    await User.update({ verified: true }, { where: { id: id } });

    const user = (await User.findOne({
      where: { id: id },
    })) as Model<UserInter>;

    const token = Jwt.sign(user.dataValues, process.env.SECRET || "tajna", {
      expiresIn: "1h",
    }).toString();

    res.status(200).send(token);
  } catch (error) {
    res.status(500).json("Failed to verify the user");
  }
});

router.put("/basic-info", async (req: Request, res: Response) => {
  const { fName, lName, email, id } = req.body;

  try {
    await User.update(
      { fName: fName, lName: lName, email: email },
      { where: { id: id } }
    );

    const user = (await User.findOne({
      where: { id: id },
    })) as Model<UserInter>;

    const token = Jwt.sign(user.dataValues, process.env.SECRET || "tajna", {
      expiresIn: "1h",
    }).toString();

    res.status(200).send(token);
  } catch (error) {
    res.status(500).json("Failed to update users credintals");
  }
});

router.put("/change-password", async (req: Request, res: Response) => {
  const { oldPassword, newPassword, id } = req.body;

  try {
    const user = (await User.findOne({
      where: { id: id },
    })) as Model<UserInter>;

    if (bcrypt.compareSync(oldPassword, user.dataValues.password)) {
      const newHash = bcrypt.hashSync(newPassword, 10);

      await User.update({ password: newHash }, { where: { id: id } });

      const updatedUser = (await User.findOne({
        where: { id: id },
      })) as Model<UserInter>;

      const token = Jwt.sign(
        updatedUser.dataValues,
        process.env.SECRET || "tajna",
        {
          expiresIn: "1h",
        }
      ).toString();

      res.status(200).send(token);
    }
    res.status(403).send("Passwords are not matching");
  } catch (error) {
    res.status(500).json("Failed to update password");
  }
});

router.post(
  "/send-reset-password-link",
  async (req: Request, res: Response) => {
    //send email to reset pass

    const { email } = req.body;

    try {
      sendChangePass(email);

      return res.status(200).send("Email was successfully sent.");
    } catch (error) {
      return res
        .status(500)
        .send("We encountered an error did you provide an email?");
    }
  }
);

router.put("/reset-password", async (req: Request, res: Response) => {
  const { newPassword, id } = req.body;

  try {
    const newHash = bcrypt.hashSync(newPassword, 10);

    await User.update({ password: newHash }, { where: { id: id } });

    const updatedUser = (await User.findOne({
      where: { id: id },
    })) as Model<UserInter>;

    const token = Jwt.sign(
      updatedUser.dataValues,
      process.env.SECRET || "tajna",
      {
        expiresIn: "1h",
      }
    ).toString();

    res.status(200).send(token);
  } catch (error) {
    res.status(500).json("Failed to update password");
  }
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/user-profile-pictures");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));

    if (mimeType && extname) {
      return cb(null, true);
    }
  },
}).single("image");

const resizeImage = (req: Request, res: Response, next: NextFunction) => {
  if (!req.file) {
    // No file uploaded, move to the next middleware
    return next();
  }

  const imagePath = req.file.path;

  // Define the new image dimensions (e.g., 300x300 pixels)
  const width = 300;
  const height = 300;

  const tempImagePath = path.join(
    "public/user-profile-pictures",
    "temp-" + req.file.filename
  );

  sharp(imagePath)
    .resize(width, height)
    .toFile(tempImagePath, (err) => {
      if (err) {
        return next(err);
      }

      // Resize is complete, replace the original image with the resized one
      fs.rename(tempImagePath, imagePath, (renameErr) => {
        if (renameErr) {
          return next(renameErr);
        }

        // Successfully resized and replaced the image, move to the next middleware
        next();
      });
    });
};

router.post(
  "/upload-profile-pic",
  resizeImage,
  upload,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.body;

      await User.update({ image: req.file!.path }, { where: { id: id } });

      const user = (await User.findOne({
        where: { id: id },
      })) as Model<UserInter>;

      const token = Jwt.sign(user.dataValues, process.env.SECRET || "tajna", {
        expiresIn: "1h",
      }).toString();

      res.status(200).json(token);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error uploading image." });
    }
  }
);

router.get("/get-user/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = (await User.findOne({
      where: { id: id },
    })) as Model<UserInter>;

    const token = Jwt.sign(user.dataValues, process.env.SECRET || "tajna", {
      expiresIn: "1h",
    }).toString();

    res.status(200).send(token);
  } catch (error) {
    return res.status(500).send("User not found");
  }
});

export default router;
