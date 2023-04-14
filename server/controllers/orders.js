require("dotenv").config();

const nodemailer = require("nodemailer");

async function sendEmail(data) {
  // create reusable transporter object using the default SMTP transport

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "meshramrohan786@gmail.com",
      pass: process.env.PASS,
    },
  });

  let listString = "";
  data.list.forEach(function (product) {
    listString += `<li style="display: flex; border-bottom: 1px solid #ccc; padding: 10px;">
    <div style="flex: 1;">
      <img src="${product.image}" style="width:150px; height:150px;">
    </div>
    <div style="flex: 2; padding: 0 20px;">
      <h3 style="color: #333; font-size: 18px;">${product.title}</h3>
      <p style="font-size: 16px; color: #666;">${product.price}</p>
      <p style="font-size: 16px; color: #666;">Quantity: ${product.order_count}</p>
    </div>
  </li>`;
  });

  // send mail with defined transport object
  let info = {
    from: '"Rohan Raju Meshram" <meshramrohan786@gmail.com>',
    to: `${data.email}`, // list of receivers
    subject: "Thanks for Ordering with us!", // Subject line
    html: `<div style="background-color: #f2f2f2; padding: 20px;">
    <h2 style="color: #333; text-align: center;">Thank you for your order!</h2>
    <p style="font-size: 16px;">Here are the details of your order:</p>
    <ul style="list-style: none; padding: 0;">
      ${listString}
    </ul>
    <p style="font-size: 16px;">If you have any questions or concerns, please don't hesitate to contact us.</p>
  </div>`, // html body
  };

  await transporter.sendMail(info, (err) => {
    if (err) {
      console.log("Error in Sending mail", err);
    } else {
      console.log("Email has sent");
    }
  });
}

async function getOrders(req, res) {
  const data = req.body;

  await sendEmail(data);

  return res.status(200).json({
    message: "Orders added successfully",
    success: true,
  });
}

module.exports = {
  getOrders,
};
