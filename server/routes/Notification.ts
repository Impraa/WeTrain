import express, { Request, Response } from "express";
import { isUserAdmin } from "../utils/middleware";

const router = express.Router();

router.post("/create-post", isUserAdmin, (req: Request, res: Response) => {
  //create a post
});

export default router;
