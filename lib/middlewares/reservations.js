// Middleware for reservation

var reservation = require(./model/reservation),
	Reservations = module.exports;

Reservations.doReservations = function(req, res, next){
	var reservationData = req.body;
	reservation.save(reservationData, next);
}