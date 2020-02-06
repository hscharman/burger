//Import express and burger.js.
var express = require("express");
var router = express.Router();
//Import model to use its functions.
var burger = require("../models/burger.js");

//Get route, main page. 
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

//GET route - "request"
router.get("/burgers", function(req, res) {
  burger.all(function(burgerData) {
    //Render burger data to homepage. 
    res.render("index", { burger_data: burgerData });
  });
});

//POST route - "create"
router.post("/burgers/create", function(req, res) {
  burger.create(req.body.burger_name, function(result) {
    //Render to index. 
    console.log(result);
    res.redirect("/");
  });
});

//PUT route - "update"
router.put("/burgers/:id", function(req, res) {
  burger.update(req.params.id, function(result) {

    console.log(result);
    // Send status response. 
    res.sendStatus(200);
  });
});

//Export the router. 
module.exports = router;




