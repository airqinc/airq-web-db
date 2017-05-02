var mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    ObjectId = mongoose.Schema.Types.ObjectId,
    Station = mongoose.model('Station');

var measureSchema = new Schema({
    id_station:   { type: ObjectId, required: true, ref: "Station"},
    timestamp:    { type: Date, required: true},    
    dominentpol:  { type: String, enum: ['co', 'pm25', 'pm10', 'co', 'so2', 'no2']},
    iaqui: {
        o3:       { type: Number, min: 0, max: 500},
        pm25:     { type: Number, min: 0, max: 500},
        pm10:     { type: Number, min: 0, max: 500},
        co:       { type: Number, min: 0, max: 500},
        so2:      { type: Number, min: 0, max: 500},
        no2:      { type: Number, min: 0, max: 500},
    },
    id_station:   { type: ObjectId, required: true, ref: "Station"},
});

measureSchema.index({ id_station: 1, timestamp: 1}, { unique: true });

measureSchema.query.byTime = function(id_station, timestamp) {
  return this.findOne({ id_station: id_station, timestamp: timestamp });
};

module.exports.Measure = mongoose.model("Measure", measureSchema);