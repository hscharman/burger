//Require express.
var express = require("express");

//Set app's port. 
var PORT = process.env.PORT || 8000;
var app = express();

//Make public static. 
app.use(express.static("public"));

//Tell app to use json and urlencoded to parse data. 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Require handlebars. 
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Require and tell app to use our routes. 
var routes = require("./controllers/burgersController.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("Listening on port:%s", PORT);
});
