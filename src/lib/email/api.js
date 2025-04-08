 import nodemailer from 'nodemailer'; 
 import verifyEmailPage from "./email.js";
 import dotenv from "dotenv"
 
//  dotenv.config({path:'../../.env'})
//  console.log("Email:", process.env.EMAIL);
// console.log("App key:", process.env.EMAIL_APP_KEY ? "loaded" : "missing");

const transporter = nodemailer.createTransport({
  service:'gmail',
    auth: {
      user: "yashtalreja180@gmail.com",
      pass: "urhp ykpc mgqz gimx",
    },
  });
  
   const sendVerificationEmail = async (to , name , otp ) => {
    const htmlContent =   verifyEmailPage({ name, otp });
  
    const mailOptions = {
      from: "yashtalreja180@gmail.com",
      to,
      subject: 'Verify Your Email',
      html: htmlContent,
    };
  
    try {
      const res = await transporter.sendMail(mailOptions);
      if (res.accepted.length === 0) {
        throw new Error('Failed to send email');
      }
      console.log('Email sent successfully');
      return { message: 'Email sent successfully' };
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('There was an internal server error in sending verification mail');
    }
  }

  export default sendVerificationEmail