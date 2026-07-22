import transporter from "../config/mailer";

const sendEmail = async (data) => {
  let { to, subject, text } = data;

  transporter.sendMail(
    {
      from: process.env.GMAIL_USER,
      to,
      subject,
      text,
    },
    (err, info) => {
      if (err) {
        console.error(err);
        throw err;
      }
      console.log(info.envelope);
      console.log(info.messageId);
      return;
    },
  );
};



export default sendEmail;
