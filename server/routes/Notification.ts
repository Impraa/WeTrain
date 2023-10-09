import express, { Request, Response } from "express";
import { isUserAdmin } from "../utils/middleware";
import Notification from "../models/notification";
import { Notification as NotificationInter } from "../../types/Notification";
import { Model } from "sequelize";

const router = express.Router();

router.post(
  "/create-notifictaion",
  isUserAdmin,
  async (req: Request, res: Response) => {
    //create a post
    const { text, title } = req.body;

    try {
      await Notification.create({ title, text });

      return res.status(201).send("Notification was created");
    } catch (error) {
      return res.status(500).send("Could not create notification");
    }
  }
);

router.get("/get-all-notifications", async (req: Request, res: Response) => {
  try {
    const allNotifications =
      (await Notification.findAll()) as unknown as Model<NotificationInter>;

    return res.status(201).send(allNotifications.dataValues);
  } catch (error) {
    return res.status(500).send("Could find any notification");
  }
});

router.get("/get-all-notifications", async (req: Request, res: Response) => {
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
