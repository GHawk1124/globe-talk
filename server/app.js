// Requiring in-built https for creating
// https server
const https = require("https");

// Express for handling GET and POST request
const express = require("express");
const app = express();

// Requiring file system to use local files
const fs = require("fs");

// Parsing the form of body to take
// input from forms
const bodyParser = require("body-parser");

// Creating object of key and certificate
// for SSL
const options = {
  key: fs.readFileSync("server.key"),
  cert: fs.readFileSync("server.cert"),
};

const server = https.createServer(options, app);
const { Server } = require('socket.io')

const io = new Server(server)

io.on('transmit', (socket) => {
  fs.writeFileSync(socket);
  console.log("Recording is being transmitted");
  console.log(socket['data']);
});

// Configuring express to use body-parser
// as middle-ware
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.raw({ limit: '1000MB' }))
// Get request for root of the app
app.get("/", function (req, res) {

  // Sending index.html to the browser
  res.sendFile(__dirname + "/simple.html");
});

app.get("/hark.js", function (req, res) {
  res.sendFile(__dirname + "/hark.bundled.js");
})

// Post request for geting input from
// the form
app.post("/audio", function (req, res) {
  console.log(req.body);
  fs.createWriteStream("audio.webm").write(req.body);
});
// Creating https server by passing
// options and app object

server.listen(8080, () => {
  console.log("Server started at port 8080");
});

