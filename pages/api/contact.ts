// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  require("dotenv").config();

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    secure: true,
  });

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error: any, success: any) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  const mailToMe = {
    from: req.body.email,
    to: "kevin.mallari@gmail.com",
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message.replace(
      "\n",
      "<br />"
    )}</div><p>Sent from: ${req.body.email}</p>`,
  };

  const mailToOther = {
    from: "kevin.mallari@gmail.com",
    to: req.body.email,
    subject: "Thank you for contacting me",
    text: "Thank you for contacting me. I will get back to you as soon as possible. Have a great day!",
    html: "<div><p>Thank you for contacting me. I will get back to you as soon as possible.</p> Have a great day!<p>Sincerely,<br/ />Kevin Luis T. Mallari<br />kevin.mallari@gmail.com<br /><a href='https://www.linkedin.com/in/kevin-luis-mallari-a4364719a/'>Kevin Luis Mallari | LinkedIn</a></div>",
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailToMe, function (err: Error, info: any) {
      if (err) console.log(err);
      else console.log(info);
    });
    transporter.sendMail(mailToOther, function (err: Error, info: any) {
      if (err) console.log(err);
      else console.log(info);
    });
  });

  res.status(200).json({ status: "OK" });
}
