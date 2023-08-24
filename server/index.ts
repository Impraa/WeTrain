import express, { Request, Response } from "express";
import { sequelize } from "./utils/database";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(3000, () => {
  console.log("Listening on a port 3000!");
  sequelize
    .sync()
    .then(() => {
      console.log("Everything is up to date!");
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });
});
