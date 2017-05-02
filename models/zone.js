var mongoose = require('mongoose'),
	connect_db_static = require('../db');
	Schema   = mongoose.Schema,
	ObjectId = mongoose.Schema.Types.ObjectId;

var zoneSchema = new Schema({
	name: 	{ type: String, required: true },
	city: {
		name: 		String,
		zip: 		String,
	},
	area: 			Number,
	time_zone: 		Number,
	stations: 		[ObjectId],
	suscriptions: 	[ObjectId]	
});

//OPERACIONES
var Zone = connect_db_static.model('Zone', zoneSchema);

exports.findAll = function(req, cb) {
	Zone.find({}, cb);
};

exports.findById = function(req, cb) {
	Zone.findById(req.params.id, cb);
};

exports.addZone = function(req, cb) {
	var zone = new Zone({
		name:   	req.body.name,
		city: {
			name: 	req.body.city_name,
			zip: 	req.body.city_zip,
		},
		area: 		req.body.area,
		time_zone: 	req.body.time_zone,
	});

	zone.save(cb);
};

/*exports.addStation = function(req, res) {
	Zone.findById(req.params.id, function(err, zone) {
		console.log(film)

		var comment = {
			"username": req.params.username,
			"stars": 	req.body.stars,
			"text": 	req.body.text,
			"date": 	(new Date())
		}

		film.comments.push(comment);

		film.save(function(err) {
			if(err) return res.send(500, err.message);
			res.status(200).jsonp(film);
		});
	});
};

exports.deleteComment = function(req, res) {
	Film.findById(req.params.filmid, function(err, film) {
		for (i = 0; i < film.comments.length; i++){
			if (film.comments[i] == req.params.commentid)
				array.splice(i, 1)
		}

		film.save(function(err) {
			if(err) return res.send(500, err.message);
			res.status(200).jsonp(film);
		});
	});
};

// CORREGIR
exports.updateFilm = function(req, res) {
	Film.findById(req.params.id, function(err, film) {
		//film.title    = req.body.title;
		film.poster   = req.body.poster;

		film.save(function(err) {
			if(err) return res.send(500, err.message);
      		res.status(200).jsonp(film);
		});
	});
};

//DELETE - Delete a Film with specified ID
exports.deleteFilm = function(req, res) {
	Film.findById(req.params.id, function(err, film) {
		film.remove(function(err) {
			if(err) return res.send(500, err.message);
      		res.status(200);
		})
	});
};*/