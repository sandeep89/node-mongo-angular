/**
	File to define all the used contorllers on site
*/

var express = require("express")
	Controller = module.exports = express(),
	reservations = require("./middlewares/reservations"),
	lib = require("./utils");


Controller.get("/",function(req, res){
	res.send("it did work");
}); 

Controller.post("/reservations",reservations.doReservations,
	lib.outputOK); 