// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
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

  const mailToMe = {
    from: req.body.email,
    to: "kevin.mallari@gmail.com",
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`,
  };

  const mailToOther = {
    from: "kevin.mallari@gmail.com",
    to: req.body.email,
    subject: "Thank you for contacting me",
    text: "Thank you for contacting me. I will get back to you as soon as possible. Have a great day!",
    html: "<p>Thank you for contacting me. I will get back to you as soon as possible. Have a great day!</p>",
  };

  transporter.sendMail(mailToMe, function (err: Error, info: any) {
    if (err) console.log(err);
    else console.log(info);
  });

  transporter.sendMail(mailToOther, function (err: Error, info: any) {
    if (err) console.log(err);
    else console.log(info);
  });
  
  res.send("Success");
}
