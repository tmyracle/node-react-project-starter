const nodemailer = require("nodemailer");

async function initTransporter() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let mailConfig;

  if (process.env.NODE_ENV === "production") {
    mailConfig = {
      host: process.env.MAIL_HOST,
      port: 587,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    };
  } else {
    let testAccount = await nodemailer.createTestAccount();
    mailConfig = {
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    };
  }

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport(mailConfig);
  return transporter;
}

async function send(transporter, from, to, subject, text) {
  let info = await transporter.sendMail({
    from: from, // sender email '"Fred Foo 👻" <foo@example.com>'
    to: to, // list of receivers
    subject: subject, // Subject line
    text: text, // plain text body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

module.exports = {
  initTransporter,
  send,
};
