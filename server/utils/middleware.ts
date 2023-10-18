import { Request, Response, NextFunction } from "express";

export const isUserAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.body.user.role === "admin") {
      return next();
    }
    return res.status(403).send("Invalid user not an admin");
  } catch (err) {
    console.log(err);
    return res.status(500).send("User not recognized");
  }
};
