var express = require('express'),
	router = express.Router(),
	Measure = require('../models/measure');

//GET - Devuelve todas las medidas
router.get('/', function(req, res) {
	Measure.all(function(err, data) {
	    if(err) return res.status(500).send(err.message);
		res.status(200).jsonp(data);
	})
})

//GET - Devuelve una medida por ID
router.get('/:id', function(req, res) {
	Measure.get(req.params.id, function(err, data) {
	    if(err) return res.status(500).send(err.message);
		res.status(200).jsonp(data);
	})
})

//POST - Crear una nueva medida
router.post('/', function(req, res) {
	var measure = {
        zone:           req.body.zone,
        station:        req.body.station,
        timestamp:      req.body.timestamp,
        dominentpol:    req.body.dominentpol,
        iaqi: {
            o3:         req.body.iaqi.o3,
            pm25:       req.body.iaqi.pm25,
            pm10:       req.body.iaqi.pm10,
            co:         req.body.iaqi.co,
            so2:        req.body.iaqi.so2,
            no2:        req.body.iaqi.no2
        },
        id_device:      req.body.id_device
    };

	Measure.add(measure, function(err, newMeasure) {
	    if(err) return res.status(500).send(err.message);
		res.status(200).jsonp(newMeasure);
	})
})

//UPDATE - Actualiza una medida
router.put('/:id', function(req, res) {
	var measure = {
        zone:           req.body.zone,
        station:        req.body.station,
        timestamp:      req.body.timestamp,
        dominentpol:    req.body.dominentpol,
        iaqi: {
            o3:         req.body.iaqi.o3,
            pm25:       req.body.iaqi.pm25,
            pm10:       req.body.iaqi.pm10,
            co:         req.body.iaqi.co,
            so2:        req.body.iaqi.so2,
            no2:        req.body.iaqi.no2
        },
        id_device:      req.body.id_device
    };

	Measure.update(req.params.id, measure, function(err, data) {
	    if(err) return res.status(500).send(err.message);
		res.status(200).jsonp(data);
	})
})

//DELETE - Borra una medida
router.delete('/:id', function(req, res) {
	Measure.delete(req.params.id, function(err, measure) {
		if(err) return res.status(500).send(err.message);
  		res.status(200).send(measure._id);
	})
})

module.exports = router;