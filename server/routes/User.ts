import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../models/user";
import { Model } from "sequelize";
import { User as UserInter } from "../../types/User";

const router = express.Router();

router.post("/register", async (req: Request, res: Response) => {
  try {
    const {
      fname,
      lname,
      username,
      email,
      birthday,
      gender,
      password,
      image,
      role,
    } = req.body;

    if (!fname || !lname || !username || !email || !password || !gender) {
      return res.status(400).json("Error missing manditory fields");
    }

    const hashPassword = bcrypt.hashSync(password, 10);

    const user = await User.create({
      fName: fname,
      lName: lname,
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

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json("Failed to retrieve the user");
  }
});

export default router;
