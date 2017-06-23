const validator = require('validator');
const nodemailer = require('nodemailer');
const config = require('../../config.json');
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

module.exports = function mailEndpoints(server) {
  server.post('/mail', (req, res) => {
    if (!validateMessage(req.body)) {
      return res.send({
        error: "Message is invalid!"
      });
    } else {
      let valReqBody = validateMessage(req.body);
      let mailOptions = {
        from: valReqBody.email,
        to: config.mailer.auth.user,
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
  });
  return server;
};

function validateMessage(reqBody) {
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
