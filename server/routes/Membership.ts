import express, { Request, Response } from "express";
import Membership from "../models/membership";
import { Model } from "sequelize";
import { Membership as MembershipInter } from "../../types/Membership";

const router = express.Router();

router.get("/:userId", async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const foundMembership = (await Membership.findOne({
      where: { userId: userId },
    })) as Model<MembershipInter>;

    if (foundMembership) {
      return res.status(200).send(foundMembership.dataValues);
    }

    return res.status(404).send("Membership not found");
  } catch (error) {
    return res.status(500).send("User dosen't have membership");
  }
});

router.post("/create", async (req: Request, res: Response) => {
  const { userId } = req.body;
  try {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 30);

    const newMembership = (await Membership.create({
      expiryDate: expiryDate,
      userId: userId,
    })) as Model<MembershipInter>;

    return res.status(201).send(newMembership.dataValues.expiryDate);
  } catch (error) {
    return res
      .status(500)
      .send("Creating user membership went wrong, please try again");
  }
});

export default router;
