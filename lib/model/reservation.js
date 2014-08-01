var Model = require('./model'),
	Schema = Model.Schema;

var reservationSchema = new Schema({
	name: String,
	address: String,
	noAdults: Number,
	status:Number
})

var Reservation = Model.model('reservation', reservationSchema);

module.exports = Reservation;
