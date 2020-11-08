// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
//import * as functions from 'firebase-functions';
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

//require("dotenv").config();
//const { SENDER_EMAIL, SENDER_PASSWORD } = process.env;

exports.sendEmailNotification = functions.database.ref("/messages/{messageId}")
.onCreate((snapshot,ctx) => {
    const data=snapshot.val();
    let authData=nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "campifylk@gmail.com",
        pass: "campify@95"
      }
    });
    authData.sendMail({
        from: "CampifyLK@gmail.com",
        to: `${data.email}`,
        subject: "Your Order is Recorded",
        text: "Text",
        html: "Your Order : "+`${data.reqitems}`
      })
      .then((res) => console.log("Successful!"))
      .catch((err) => console.log(err));
  });
