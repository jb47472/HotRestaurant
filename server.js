// Require/import the HTTP module
var http = require("http");
var express = require("express");
var path = require("path");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Create a generic function to handle requests and responses
// function handleRequest(request, response) {
// }

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
// var server = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

var reservation = [{
    name: "John",
    phoneNumber: "707-987-9874",
    email: "john@sexytime.com",
    uniqueId: "12345"

}];

var waitingList = [{
    name: "John",
    phoneNumber: "707-987-9874",
    email: "john@sexytime.com",
    uniqueId: "12345"
}];


app.get("/", function(req, res) {
    // res.sendFile(path.join(__dirname, "view.html"));
    res.json(waitingList);
});

app.get("/api/waitinglist", function(req, res) {
    // res.sendFile(path.join(__dirname, "view.html"));
    res.json(waitingList);
});
app.get("/api/reservation", function(req, res) {
    // res.sendFile(path.join(__dirname, "view.html"));
    res.json(reservation);
});



