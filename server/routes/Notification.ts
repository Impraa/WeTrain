import express, { Request, Response, NextFunction } from "express";
import { isUserAdmin } from "../utils/middleware";
import Notification from "../models/notification";
import { Notification as NotificationInter } from "../../types/Notification";
import { Model } from "sequelize";
import multer from "multer";
import path from "path";
import sharp from "sharp";
import fs from "fs";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/notification-banner");
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
  console.log(req.file);
  if (!req.file) {
    // No file uploaded, move to the next middleware
    return next();
  }

  const imagePath = req.file.path;

  // Define the new image dimensions (e.g., 300x300 pixels)
  const width = 300;
  const height = 300;

  const tempImagePath = path.join(
    "public/notification-banner",
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
  "/create",
  resizeImage,
  upload,
  isUserAdmin,
  async (req: Request, res: Response) => {
    //create a post
    const { text, title } = req.body.formData;

    try {
      if (req.file) {
        await Notification.create({ title, text, image: req.file.path });
      } else {
        await Notification.create({ title, text });
      }
      return res.status(201).send("Notification was created");
    } catch (error) {
      return res.status(500).send("Could not be create notification");
    }
  }
);

router.get("/get-all", async (req: Request, res: Response) => {
  try {
    const allNotifications = await Notification.findAll();

    const notificationsDataValues = allNotifications.map(
      (notification) => notification.dataValues
    );

    return res.status(201).send(notificationsDataValues);
  } catch (error) {
    return res.status(500).send("Could find any notifications");
  }
});

router.get("/get-one/:id", async (req: Request, res: Response) => {
  const { id } = req.body;

  try {
    const foundNotification = (await Notification.findOne({
      where: { id: id },
    })) as unknown as Model<NotificationInter>;

    return res.status(201).send(foundNotification.dataValues);
  } catch (error) {
    return res.status(500).send("Could find any notification");
  }
});

export default router;
