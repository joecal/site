const express = require('express');
const bodyParser = require('body-parser');
const validator = require('validator');
const nodemailer = require('nodemailer');
const compression = require('compression');
const path = require('path');
const http = require('http');
const fs = require('fs');
const config = require('../config.json');
const app = express();

const transporter = nodemailer.createTransport({
  host: config.mailer.host,
  port: config.mailer.port,
  secure: config.mailer.secure,
  auth: {
    type: config.mailer.auth.type,
    user: config.mailer.auth.user,
    clientId: config.mailer.auth.clientId,
    clientSecret: config.mailer.auth.clientSecret,
    refreshToken: config.mailer.auth.refreshToken,
    accessToken: config.mailer.auth.accessToken
  }
});

app.use(compression());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Request-Method', '*');
  res.header("Access-Control-Allow-Methods", "GET,POST");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.post('/mail', (req, res, next) => {

  res.setHeader('Access-Control-Allow-Origin', 'https://joecal.herokuapp.com');
  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', '*');

  if (!validateMessage(req.body)) {
    return res.send({
      error: "Message is invalid!"
    });
  } else {
    let valReqBody = validateMessage(req.body);
    let mailOptions = {
      from: valReqBody.email,
      to: 'jcalvillo757@gmail.com',
      subject: 'Message from ' + valReqBody.name + ' @ ' + valReqBody.email,
      text: valReqBody.message
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log("Error: ", err);
        return res.send({
          error: "Message failed!"
        });
      } else {
        return res.send({
          success: "Message sent!"
        });
      }
    })
  }
  next();
});

const validateMessage = (reqBody) => {
  let reqName = validator.whitelist(reqBody.name, 'A-z\ '),
    reqMessage = validator.whitelist(reqBody.message,
      'a-zA-Z0-9!@#?\ \$%\:\~\,\^\&*\)\(+=._-');

  if (validator.isLength(reqName, {
      min: 1,
      max: 20
    }) === true &&
    validator.isEmail(reqBody.email) === true) {
    return {
      name: reqName,
      email: reqBody.email,
      message: reqMessage
    };
  } else {
    return null;
  };
};

app.get('/wakemydyno.txt',(req, res, next) => {
  res.sendFile(path.join(__dirname, '/', 'wakemydyno.txt'));
});

app.use(express.static(path.join(__dirname, '../dist')));

const port = process.env.PORT || '4000';

app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));
