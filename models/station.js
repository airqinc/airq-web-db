var mongoose = require('mongoose'),
	dbs = require('../config').dbs,
	connections = require('../db');

var stationSchema = new mongoose.Schema({
	zone:  		{ type: String, required: true},
	name:     	{ type: String, required: true},
	latitude:   Number,
	longitude: 	Number
});

measureSchema.index({ zone: 1, name: 1}, { unique: true });

var Station = connections[dbs.db2.name].model("Station", stationSchema);

//OPERACIONES

exports.all = function(cb) {
	Station.find({}, cb);
};

exports.get = function(name, cb) {
	Station.findOne({"name": name}, cb);
};

exports.add = function(newStation, cb) {
	var station = new Station({
		zone: 		newStation.zone,
		name:   	newStation.name,
		latitude: 	newStation.latitude,
		longitude: 	newStation.longitude
	});

	station.save(cb);
};

exports.update = function(name, newStation, cb) {
	Station.findOne({"name": name}, function(err, station) {
		station.latitude 	= newStation.latitude || station.latitude;
		station.longitude 	= newStation.longitude || station.longitude;

		station.save(cb);
	});
};

exports.delete = function(name, cb) {
	Station.findOneAndRemove({"name": name}, cb);
};