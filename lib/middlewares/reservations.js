// Middleware for reservation

var reservation = require("../model/reservation"),
	Reservations = module.exports;

Reservations.doReservations = function(req, res, next){
	console.log(req.body);
	reservation.create(req.body, function(err, reservation){
		console.log(reservation);
		next();
	});
}