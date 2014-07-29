/**
	File to define all the used contorllers on site
*/

var express = require("express")
	Controller = module.exports = express();


Controller.get("/",function(req, res){
	res.send("it did work");
}); 