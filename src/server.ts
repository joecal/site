import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import { platformServer, renderModuleFactory } from '@angular/platform-server'
import { enableProdMode } from '@angular/core'
import { AppServerModuleNgFactory } from '../dist/ngfactory/src/app/app.server.module.ngfactory'
import * as express from 'express';
import * as validator from 'validator';
import * as nodemailer from 'nodemailer';
import { readFileSync } from 'fs';
import { join } from 'path';
import { config } from '../config';

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

const PORT = 4000;

enableProdMode();

const app = express();

let template = readFileSync(join(__dirname, '..', 'dist', 'index.html')).toString();

app.engine('html', (_, options, callback) => {
  const opts = { document: template, url: options.req.url };

  renderModuleFactory(AppServerModuleNgFactory, opts)
    .then(html => callback(null, html));
});

app.set('view engine', 'html');
app.set('views', 'src')

app.get('*.*', express.static(join(__dirname, '..', 'dist')));

app.get('*', (req, res) => {
  res.render('index', { req });
});

app.post('/mail', (req, res) => {

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000');
  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', '*');

  console.log("req.body",req.body)

  // if (!validateMessage(req.body)) {
  //   return res.send({
  //     error: "Message is invalid!"
  //   });
  // } else {
  //   let valReqBody = validateMessage(req.body);
  //   let mailOptions = {
  //     from: valReqBody.email,
  //     to: 'jcalvillo757@gmail.com',
  //     subject: 'Message from ' + valReqBody.name + ' @ ' + valReqBody.email,
  //     text: valReqBody.message
  //   };
  //   transporter.sendMail(mailOptions, (err, info) => {
  //     if (err) {
  //       console.log("Error: ", err);
  //       return res.send({
  //         error: "Message failed!"
  //       });
  //     } else {
  //       return res.send({
  //         success: "Message sent!"
  //       });
  //     }
  //   })
  // }
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

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}!`);
});
