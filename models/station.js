var mongoose = require('mongoose'),
	dbs = require('../config').dbs,
	connections = require('../db');

var stationSchema = new mongoose.Schema({
	zone:  		{ type: String, required: true},
	name:     	{ type: String, required: true},
	latitude:   Number,
	longitude: 	Number
});

//OPERACIONES
var Station = connections[dbs.db2.name].model("Station", stationSchema);

exports.all = function(cb) {
	Station.find({}, cb);
};

exports.findById = function(id, cb) {
	Station.findById(id, cb);
};

exports.add = function(newStation, cb) {
	var station = new Station({
		zone: 		newStation.zone,
		name:   	newStation.name,
		latitude: 	newStation.latitude,
		longitude: 	newStation.longitude,
	});

	station.save(cb);
};

exports.update = function(id, newStation, cb) {
	Station.findById(id, function(err, station) {
		station.name 		= newStation.name || station.name;
		station.latitude 	= newStation.latitude || station.latitude;
		station.longitude 	= newStation.longitude || station.longitude;

		station.save(cb);
	});
};

exports.delete = function(id, cb) {
	Station.findByIdAndRemove(id, cb);
};