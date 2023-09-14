import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: "../.env" });
}

import QRCode from "qrcode";
import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import multer from "multer";
import User from "../models/user";
import { Model } from "sequelize";
import Jwt from "jsonwebtoken";
import { User as UserInter } from "../../types/User";
import { sendVerifyLink } from "../utils/sendEmail";
import path from "path";
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

router.post(
  "/upload-profile-pic",
  upload,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.body;

      await User.update({ image: req.file!.path }, { where: { id: id } });

      res.status(200).json({ message: "Image uploaded successfully." });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error uploading image." });
    }
  }
);

export default router;
