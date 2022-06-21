const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "rayjaworski@gmail.com",
      pass: "vteoyaancmsijodi",
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

  router.post("/emailsend", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const company = req.body.company;
    const phone = req.body.phone;
    const select = req.body.select;
    const message = req.body.message;
    const mail = {
      from: name,
      to: "rayjaworski@gmail.com",
      subject: "Contact Form Submission",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Company: ${company}</p>
             <p>Phone: ${phone}</p>
             <p>Reason for contact: ${select}</p>
             <p>Message:</p>
             <p>${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
  });