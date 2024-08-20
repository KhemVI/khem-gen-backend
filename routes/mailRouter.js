import express from 'express';
import { smtpTransport } from '../utils/mail.js';

export const router = express.Router();
router.get('/', getMail);

export async function getMail(req, res, next) {
  try {
    let info = await smtpTransport.sendMail({
      from: '"Example Sender" <sender@example.com>',
      to: "recipient@example.com",
      subject: "Hello from MailHog", 
      text: "This is a test email sent from a Node.js app!",
      html: "<b>This is a test email sent from a Node.js app!</b>",
    });

    console.log("Message sent: %s", info.messageId);
    res.send("Email sent successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to send email.");
  }
}