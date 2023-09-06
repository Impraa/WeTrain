import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: "../.env" });
}

import nodemailer from "nodemailer";
import { User } from "../../types/User";

export const sendVerifyLink = async function (user: User, email: String) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: '"We Train" <biznisimpra@gmail.com>',
    to: `${email}`,
    subject: "Verification Email",
    html: `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Email Template</title>
      </head>
      <body>
        <div class="mail"  style="
        text-align:center;
        flex-direction: column;
        border: 2px solid #ff7043;
        font-family: sans-serif;
        padding: 2em 0;
      ">
          <h2 style="display:block;font-family: sans-serif;">Welcome to we train ${
            user.gender === "male" ? "Mr" : "Ms."
          }.${user.lName}!</h2>
          <a href="${
            process.env.CILENT_URL || `http://127.0.0.1:5173/verify/${user.id}`
          }" class="normal"  style="
          display:block;
          padding: 1em 2em;
          margin: 0 40%;
          font-family: sans-serif;
          font-size: 1em;
          font-weight: bold;
          color: white;
          cursor: pointer;
          background-color: #ff7043;
          border: none;
          text-decoration: none;
          border-radius: 2em;
        ">Verify Now</a>
        </div>
      </body>
    </html>`,
  });
};
