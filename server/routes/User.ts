import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../models/user";
import { Model } from "sequelize";
import { User as UserInter } from "../../types/User";

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

    console.log(req.body);

    const hashPassword = bcrypt.hashSync(password, 10);

    const user = await User.create({
      fName,
      lName,
      email,
      username,
      birthday,
      gender,
      password: hashPassword,
      image,
      role,
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).send("Database error " + error);
  }
});

router.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = (await User.findOne({
      where: {
        email: email,
      },
    })) as Model<UserInter>;

    if (!bcrypt.compareSync(password, user.dataValues.password)) {
      return res.status(404).json({ error: "Email or password incorrect" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve the user" });
  }
});

export default router;