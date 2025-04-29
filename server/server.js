const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config(); // <== แก้ตรงนี้

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/send-order", async (req, res) => {
  const { name, email, order } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "betapower00015@gmail.com",
      pass: process.env.GMAIL_APP_PASSWORD
    }
  });

  const mailOptions = {
    from: email,
    to: "betapower00015@gmail.com",
    subject: "📦 มีรายการสั่งซื้อหนังสือดูดวง",
    text: `ชื่อผู้สั่งซื้อ: ${name}\nอีเมล: ${email}\n\nรายการสั่งซื้อ:\n${order.join("\n")}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("อีเมลถูกส่งแล้ว");
  } catch (err) {
    console.error(err);
    res.status(500).send("เกิดข้อผิดพลาดในการส่งอีเมล");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
const path = require("path");

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/*splat", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});
