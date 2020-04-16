var PORT = process.env.PORT || 5000;
var express = require("express");
(path = require("path")),
  (nodeMailer = require("nodemailer")),
  (bodyParser = require("body-parser"));
var app = express();
var http = require("http");
var server = http.Server(app);

app.use(express.static(__dirname + "/public/"));
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.use(express.static("src"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/send-email", function(req, res) {
  console.log(req.body); // nen anh moi bao la console.log req.body ra de xem xem co chuyen gi >_<
  let transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // should be replaced with real sender's account
      user: "vyphamnodemailer@gmail.com",
      pass: "Phamhavy171!"
    }
  });
  let mailOptions = {
    // should be replaced with real recipient's account
    to: "phamhavy171@gmail.com",
    subject: req.body.subject,
    text: req.body.message
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message %s sent: %s", info.messageId, info.response);
  });
  res.writeHead(301, { Location: "/" });
  res.end();
});

server.listen(PORT, function() {
  console.log("form running");
});
