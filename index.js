const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const helmet = require('helmet');
const sixtyDaysInSeconds = 5184000;

app.use(helmet());
app.use(helmet.noCache());
app.use(helmet.ieNoOpen());
app.use(helmet.xssFilter());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.frameguard({
  action: 'deny'
}));
app.use(helmet.hidePoweredBy({
  setTo: 'PHP 4.2.0'
}));
app.use(helmet.referrerPolicy({
  policy: 'no-referrer'
}));
app.use(helmet.hsts({
  maxAge: sixtyDaysInSeconds
}));
app.use(helmet.contentSecurityPolicy({
  directives: {
    scriptSrc: ["'self'"],
    objectSrc: ["'none'"]
  }
}));

app.use(express.static('public'));
app.use('/node_modules', express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', true);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  return next();
});

const server = app.listen(process.env.PORT || 8080, error => {
  if (error) {
    console.log('Error: ', error)
  } else {
    let port = server.address().port;
    console.log(`Serving at ${port}`)
  }
});

require(path.join(__dirname, '/public/js', 'mail.js'))(app);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, '/public', 'index.html'));
});
