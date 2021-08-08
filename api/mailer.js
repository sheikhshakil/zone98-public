const nodemailer = require("nodemailer");
const ejs = require("ejs");

module.exports = async (userEmail, mailSub, type) => {
  let mailId, fromText;
  switch (type) {
    case "notify":
      mailId = process.env.NOTIFYMAIL;
      fromText = `Zone98 Notification <${process.env.NOTIFYMAIL}>`;
      break;
    case "support":
      mailId = process.env.SUPPORTMAIL;
      fromText = `Zone98 Support <${process.env.SUPPORTMAIL}>`;
      break;
  }

  let transporter = nodemailer.createTransport({
    host: "mail.zone98.xyz",
    port: 465,
    secure: true,
    auth: {
      user: mailId,
      pass: process.env.MAIL_PASS,
    },
  });

  let mailData = {
    from: fromText,
    to: userEmail,
    subject: mailSub,
    text: "Test",
  };

  try {
    let result = await transporter.sendMail(mailData);
    console.log(result.messageId);
  } catch (error) {
    console.log(error);
  }
};
