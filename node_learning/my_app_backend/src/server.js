var express = require("express");

var app = express();

// // app.get("/hello", function(req, res) {
// //   res.send("Hello there");
// // });

// // /api/game/flappybird/

// app.get("/api/game/:gameName/:vote", function(req, res) {
//   if () {}
//   res.send(req.params);
// });

// app.listen(1234, function() {
//   console.log("Listening on port 1234");
// });

// vote

// var resp = {
//   Score: 0,
//   upvote: 0,
//   downvote: 0
// };
// app.get("/api/game/:gameName/:vote", function(req, res) {
//   if (req.params.vote === "upvote") {
//     resp.upvote++;
//     resp.score++;
//     res.jsonp(resp);
//   } else if (req.params.vote === "downvote") {
//     resp.downvote++;
//     if (resp.score !== 0) {
//       resp.score--;
//     }
//     res.jsonp(resp);
//   } else {
//     res.status(400).jsonp({ error: "Bad Request. Invalid vote." });
//   }
// });
// app.listen(1234, function() {
//   console.log("Listening on port 1234");
// });

// vote
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});
console.log(__dirname);
app.get("/resume/download", function(req, res) {
  res.download(__dirname + "/public/cv.pdf");
});

app.listen(1234, function() {
  console.log("Listening on port 1234");
});
