import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const contact = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, emailPro, phoneNumber, message } = req.body;

  const user = process.env.user;
  const data = {
    name,
    emailPro,
    phoneNumber,
    message,
  };

  const transporter = nodemailer.createTransport({
    host: "smtp.viaduc.fr",
    port: 587,
    secure: false,
    auth: {
      user: user,
      pass: process.env.pass,
    },
    debug: true, // Active la journalisation
  });

  try {
    const mail = await transporter.sendMail({
      from: emailPro,
      to: user,
      replyTo: emailPro,
      subject: `Contact venant de ${name}`,
      html: `
        <p>Name: ${name} </p>
        <p>Email: ${emailPro} </p>
        <p>Numéro: ${phoneNumber} </p>
        <p>Message: ${message} </p>
      `,
    });

    console.log("Message envoyé:", mail.messageId);

    res.status(200).json({ message: "Success" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Could not send the email" });
  }
};

export default contact;
