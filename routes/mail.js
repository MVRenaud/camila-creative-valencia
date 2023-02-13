const nodemailer = require("nodemailer");
const Mail = require("nodemailer/lib/mailer");
const { verifyToken } = require("./verifyToken");

const router = require("express").Router();

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      pass: process.env.WORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
});

transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`=== Server is ready to take messages: ${success} ===`);
 });

 router.post("/",  (req, res)=>{
    let mailOptions = {
    from: `${req.body.mailerState.email}`,
    to: process.env.EMAIL,
    subject: `Message from: ${req.body.mailerState.email}`,
    text: `${req.body.mailerState.message}`,
    };

    transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        res.json({
            status: "fail",
        })
    } else {
    console.log("== Message Sent ==");
    res.json({
        status: "success",
      });
    }
    });
 });
 

 

 module.exports = router