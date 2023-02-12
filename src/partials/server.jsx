import Express from 'express';
import bodyParser from 'body-parser';
// Express for handling GET and POST request
const express = Express();
const app = express();

// Requiring file system to use local files


// Parsing the form of body to take
// input from forms

// Configuring express to use body-parser
// as middle-ware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Get request for root of the app
app.get("/", function(req, res) {

  // Sending index.html to the browser
  res.sendFile(__dirname + "/newsletter");
});

// Post request for geetting input from
// the form
app.post("/mssg", function(req, res) {

  // Logging the form body
  console.log(req.body);

  // Redirecting to the root
  res.redirect("/");
});

// Creating object of key and certificate
// for SSL
const options = {
  key: "sdjagl",
  cert: "agl;jad",
};

// Creating https server by passing
// options and app object
https.createServer(options, app)
  .listen(3000, function(req, res) {
    console.log("Server started at port 3000");
  }); 
