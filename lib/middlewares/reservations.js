// Middleware for reservation

var reservation = require("../model/reservation"),
	Reservations = module.exports;

Reservations.doReservations = function(req, res, next){
	var reservationData = req.body;
	reservation.create(reservationData, function(err, reservation){
		console.log(reservation);
		next();
	});
}