import nodemailer from 'nodemailer';
import { parseBoolean } from '../utils';

const {
  SENDGRIP_HOST,
  SENDGRIP_PORT,
  SENDGRIP_SECURE,
  SENDGRIP_USER,
  SENDGRIP_PASS
} = process.env;

const SENDGRIP_SMTP = {
  host: SENDGRIP_HOST,
  port: parseInt(SENDGRIP_PORT),
  secure: parseBoolean(SENDGRIP_SECURE),
  auth: { user: SENDGRIP_USER, pass: SENDGRIP_PASS }
};

export const Transporter = nodemailer.createTransport(SENDGRIP_SMTP);

export const sendMailConfirmSubscribe = senderEmail => {
  const mailObject = {
    to: senderEmail,
    subject: '[thecryptolotter] Thank you for subscribe us!',
    from: 'info@thecryptolotter.io',
    html: `<html><body><h1>Subscribe successfull!</h1></body></html>`
  };
  return Transporter.sendMail(mailObject);
};
