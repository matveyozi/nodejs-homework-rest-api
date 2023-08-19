const nodemailer = require("nodemailer");
require("dotenv").config();
// const { META_PASSWORD } = process.env;
const { USER_PASSWORD } = process.env;

const sendEmail = async ({ to, subject, html }) => {
  const email = {
    to,
    from: "sandbox.smtp.mailtrap.io",
    subject,
    html,
  };

  const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "5fb69d93e7465d",
      pass: USER_PASSWORD,
    },
  });

  await transport.sendMail(email);
};

module.exports = { sendEmail };
