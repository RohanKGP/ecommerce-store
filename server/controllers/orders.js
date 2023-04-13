const nodemailer = require("nodemailer");

async function sendEmail(user) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "meshramrohan786@gmail.com",
      pass: "ebbkfrwvyxqxqgle",
    },
  });

  // send mail with defined transport object
  let info = {
    from: '"Rohan Raju" <meshramrohan786@gmail.com>',
    to: "testwork0786@gmail.com", // list of receivers
    subject: "Your Order:", // Subject line
    html: "", // html body
  };

  await transporter.sendMail(info, (err) => {
    if (err) {
      console.log("Error in Sending mail", err);
    } else {
      console.log("Email has sent");
    }
  });

  console.log(`Message sent: ${JSON.stringify(info)}`);
}

async function getOrders(req, res) {
  const user = req.body;
  console.log(user);

  await sendEmail(user);

  return res.status(200).json({
    message: "Orders added successfully",
    success: true,
  });
}

module.exports = {
  getOrders,
};
