var express = require('express'),
	router = express.Router(),
	Station = require('../models/station'),
	Zone = require('../models/zone');

//GET - Devuelve todas las estaciones
router.get('/', function(req, res) {
	Station.all(function(err, data) {
	    if(err) return res.status(500).send(err.message);
		res.status(200).jsonp(data);
	})
})

//GET - Devuelve una estacion por nombre
router.get('/:name', function(req, res) {
	Station.get(req.params.name, function(err, data) {
	    if(err) return res.status(500).send(err.message);
		res.status(200).jsonp(data);
	})
})

//POST - Crear una nueva estacion
router.post('/', function(req, res) {
	var station = {
		zone: 		req.body.zone,
		name:   	req.body.name,
		latitude: 	req.body.latitude,
		longitude: 	req.body.longitude,
	};

	Station.add(station, function(err, newStation) {
	    if(err) return res.status(500).send(err.message);

	    Zone.addStation(newStation.zone, newStation._id)

		res.status(200).jsonp(newStation);
	})
})

//UPDATE - Actualiza una estacion (no se puede cambiar de zona)
router.put('/:name', function(req, res) {
	var station = {
		latitude: 	req.body.latitude,
		longitude: 	req.body.longitude,
	};

	Station.update(req.params.name, station, function(err, data) {
	    if(err) return res.status(500).send(err.message);
		res.status(200).jsonp(data);
	})
})

//DELETE - Borra una estacion
router.delete('/:name', function(req, res) {
	Station.delete(req.params.name, function(err, station) {
		if(err) return res.status(500).send(err.message);

		Zone.deleteStation(station.zone, station.name)

  		res.status(200).send(station.name);
	})
})

module.exports = router;