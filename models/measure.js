var mongoose = require('mongoose'),
    dbs = require('../config').dbs,
    connections = require('../db'),
    ObjectId = mongoose.Schema.Types.ObjectId;

var measureSchema = new mongoose.Schema({
    station:        { type: String, required: true},
    timestamp:      { type: Date, required: true},    
    dominentpol:    { type: String, enum: ['o3', 'pm25', 'pm10', 'co', 'so2', 'no2']},
    iaqi: {
        o3:         { type: Number, min: 0, max: 500},
        pm25:       { type: Number, min: 0, max: 500},
        pm10:       { type: Number, min: 0, max: 500},
        co:         { type: Number, min: 0, max: 500},
        so2:        { type: Number, min: 0, max: 500},
        no2:        { type: Number, min: 0, max: 500},
    }
});

measureSchema.index({ zone: 1, station: 1, timestamp: 1}, { unique: true });

/*measureSchema.query.byTime = function(id_station, timestamp) {
  return this.findOne({ id_station: id_station, timestamp: timestamp });
};*/

var Measure = connections[dbs.db3.name].model('Measure', measureSchema);

//OPERACIONES

exports.all = function(cb) {
    Measure.find({}, cb);
};

exports.get = function(id, cb) {
    Measure.findById(id, cb);
};

exports.add = function(newMeasure, cb) {
    var measure = new Measure({
        station:        newMeasure.station,
        timestamp:      Date(newMeasure.timestamp),
        dominentpol:    newMeasure.dominentpol,
        iaqi: {
            o3:         newMeasure.iaqi.o3,
            pm25:       newMeasure.iaqi.pm25,
            pm10:       newMeasure.iaqi.pm10,
            co:         newMeasure.iaqi.co,
            so2:        newMeasure.iaqi.so2,
            no2:        newMeasure.iaqi.no2
        }
    });

    measure.save(cb);
};

exports.update = function(name, newMeasure, cb) {
    Measure.findById(id, function(err, measure) {
        measure.station     = newMeasure.station || measure.station;
        measure.timestamp   = newMeasure.timestamp || measure.timestamp;
        measure.dominentpol = newMeasure.dominentpol || measure.dominentpol;
        measure.iaqi.o3     = newMeasure.iaqi.o3 || measure.iaqi.o3;
        measure.iaqi.pm25   = newMeasure.iaqi.pm25 || measure.iaqi.pm25;
        measure.iaqi.pm10   = newMeasure.iaqi.pm10 || measure.iaqi.pm10;
        measure.iaqi.co     = newMeasure.iaqi.co || measure.iaqi.co;
        measure.iaqi.so2    = newMeasure.iaqi.so2 || measure.iaqi.so2;
        measure.iaqi.no2    = newMeasure.iaqi.no2 || measure.iaqi.no2;
        
        measure.save(cb);
    });
};

exports.delete = function(id, cb) {
    Measure.findByIdAndRemove(id, cb);
};


// OPERACIONES ADICIONALES

exports.allFromZone = function(zone, cb) {
    Measure.find({ "zone": zone }, cb);
};

exports.allFromStation = function(zone, station, cb) {
    Measure.find({ "zone": zone, "station": station }, cb);
};