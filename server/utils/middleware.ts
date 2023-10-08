import Jwt from "jsonwebtoken";
import { User as UserInter } from "../../types/User";
import { Request, Response, NextFunction } from "express";

export const isUserAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userToken = req.body.token;

  try {
    const user = Jwt.verify(
      userToken,
      process.env.SECRET || "tajna"
    ) as UserInter;
    if (user.role === "admin") {
      return next();
    }
    return res.status(403).send("Invalid user not an admin");
  } catch (err) {
    return res.status(500).send("User not recognized");
  }
};
