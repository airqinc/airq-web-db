var mongoose = require('mongoose'),
	Schema   = mongoose.Schema,
	ObjectId = mongoose.Schema.Types.ObjectId,
	Zone = mongoose.model('Zone');

var stationSchema = new Schema({
	id_zone:  	{ type: ObjectId, required: true, ref: "Zone"},
	name:     	{ type: String, required: true},
	latitude:   Number,
	longitude: 	Number
});

module.exports.Station = mongoose.model("Station", stationSchema);