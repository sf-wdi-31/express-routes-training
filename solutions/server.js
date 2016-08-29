
// SERVER-SIDE JAVASCRIPT
// run npm install to install all required packages before starting server

var express = require("express");
var app = express();


// MIDDLEWARE
app.use(express.static('public'));

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// Allow CORS:
// not necessary since we'll be making requests from a js file
  // that we are also serving (as static assets in public)
// app.use(function(request, response, next) {
//   response.header("Access-Control-Allow-Origin", "*");
//   response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// ROUTES
// define a root route: localhost:3000/
app.get('/', function (request, response) {
  response.sendFile('views/index.html' , { root : __dirname});
});

// Pick A Color
app.get("/color/:choice", function(request, response){
  var choice = req.params.choice;
  response.send("Your color is: " + choice);
});

// Which Taco?
var tacos = [
                "Soft Taco",
                "Crunchy Taco",
                "Super Taco"
            ];

app.get("/tacos/:i", function(request, response){
  var index = req.params.i;
  var selection = tacos[i] || "Sorry, that's not a taco option";
  response.json( selection );
});


// The Number Guessing Game
var targetNumber = 7;

app.get("/pick-a-number", function(request, response){
  var num = req.query.num;
  if (num === targetNumber){
    response.send("Nailed it!");
  } else if (num > targetNumber){
    response.send("Too High!");
  } else {
    response.send("Too Low");
  }
});

app.post("/pick-a-number", function(request, response){
  targetNumber = req.body.newNumber;
  response.status(200).send("Number updated successfully!");
});


// Calculator
app.get("/add", function(request, response){
  var x = req.query.x;
  var y = req.query.y;
  var total = x+y;
  response.send( total );
});

app.get("/multiply", function(request, response){
  var x = req.query.x;
  var y = req.query.y;
  var total = x*y;
  response.send( total );
});

// Gallery
var artworks = [];

app.get("/artworks", function(request, response){
  response.json(artworks);
});

app.post("/artworks", function(request, response){
  var newArtwork = {
    name: req.body.title,
    description: req.body.description,
    artist: req.body.artist
  };
  artworks.push(newArtwork);
});


// SERVER START
var port = 3000;
app.listen(port, function(){
  console.log("Server Running at localhost:3000/")
});
