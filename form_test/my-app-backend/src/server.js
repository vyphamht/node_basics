var express = require("express");
(path = require("path")),
  (nodeMailer = require("nodemailer")),
  (bodyParser = require("body-parser"));
var app = express();

app.use(express.static(__dirname + "/public/"));
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.use(express.static("src"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/send-email", function(req, res) {
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
    body: req.body.message
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message %s sent: %s", info.messageId, info.response);
  });
  res.writeHead(301, { Location: "index.html" });
  res.end();
});

let server = app.listen(8081, function() {
  let port = server.address().port;
  console.log("Server started at http://localhost:%s", port);
});
