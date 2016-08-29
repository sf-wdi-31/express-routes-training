// run npm install to install all required packages before running this

var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// Pick A Color
app.get("/color/:choice", function(req, res){
  var choice = req.params.choice;
  res.send("Your color is: " + choice);
});

// Which Taco?
var tacos = [
                "Soft Taco",
                "Crunchy Taco",
                "Super Taco"
            ];

app.get("/tacos/:i", function(req, res){
  var index = req.params.i;
  var selection = tacos[i] || "Sorry, that's not a taco option";
  res.json( selection );
});


// The Number Guessing Game
var targetNumber = 7;

app.get("/pick-a-number", function(req, res){
  var num = req.query.num;
  if (num === targetNumber){
    res.send("Nailed it!");
  } else if (num > targetNumber){
    res.send("Too High!");
  } else {
    res.send("Too Low");
  }
});

app.post("/pick-a-number", function(req, res){
  targetNumber = req.body.newNumber;
  res.status(200).send("Number updated successfully!");
});


// Calculator
app.get("/add", function(req, res){
  var x = req.query.x;
  var y = req.query.y;
  var total = x+y;
  res.send( total );
});

app.get("/multiply", function(req, res){
  var x = req.query.x;
  var y = req.query.y;
  var total = x*y;
  res.send( total );
});

// Building Cities
var cities = [];

app.get("/cities", function(req, res){
  res.json(cities);
});

app.post("/cities", function(req, res){
  var newCity = {
    name: req.body.name,
    description: req.body.description
  };
  cities.push(newCity);
});

var port = 3000;
app.listen(port, function(){
  console.log("Server Running at localhost:3000/")
});
