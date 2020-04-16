var express = require("express");
var http = require("http");
var PORT = process.env.PORT || 5000;

var app = express();

app.get("/", function(req, res) {
  res.send("Hello");
});

// language filter start

// app.get("/api/events/:language", function(req, res) {
//   var _lang = req.params.language;
//   http
//     .get(
//       "http://open-api.myhelsinki.fi/v1/activities/?language_filter=" + _lang,
//       resp => {
//         let data = "";
//         resp.on("data", chunk => {
//           data += chunk;
//         });
//         resp.on("end", () => {
//           var _formattedData = JSON.parse(data),
//             _result = [];

//           _formattedData.data.forEach(function(eventInfo) {
//             if (eventInfo.info_url !== null) {
//               _result.push({
//                 event_name: eventInfo.name[_lang],
//                 event_url: eventInfo.info_url
//               });
//             }
//           });
//           res.send(_result);
//         });
//       }
//     )
//     .on("error", err => {
//       res.send("Error: " + err.message);
//     });
// });

// language filter end

function fetchEventData() {
  var apiUrl = "http://open-api.myhelsinki.fi/v1/activities/";
  return new Promise(function(resolve, reject) {
    http
      .get(apiUrl, resp => {
        var data = "";
        resp.on("data", chunk => {
          data += chunk;
        });
        resp.on("end", () => {
          console.log("end of data received");
          data = JSON.parse(data);
          resolve(data);
        });
      })
      .on("error", function(err) {
        reject(err);
      });
  });
}

app.get("/api/allevents", function(req, res) {
  fetchEventData()
    .then(function(data) {
      res.send(data);
    })
    .catch(function(err) {
      res.send(err);
    });
});

app.listen(PORT, function() {
  console.log(`listening on ${PORT}`);
});
