import express, { NextFunction, Request, Response } from "express";
import { sequelize } from "./utils/database";
import User from "./routes/User";
import cors from "cors";

import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: "../.env" });
}
const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://127.0.0.1:5173", //change this
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/user", User);

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  res.status(404).send("Method not found");
});

app.listen(3000, () => {
  console.log(process.env.PORT || "Listening on a port 3000!");
  sequelize
    .sync()
    .then(() => {
      console.log("Everything is up to date!");
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });
});
