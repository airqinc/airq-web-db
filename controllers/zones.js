var express = require('express'),
	router = express.Router(),
	Zone = require('../models/zone');
	//auth = require('../middlewares/auth');

//GET - Devuelve todas las zonas disponibles
router.get('/', function(req, res) {
	Zone.findAll(req, function(err, zones) {
	    if(err) return res.send(500, err.message);
		res.status(200).jsonp(zones);
	})
})

//GET - Devuelve una zona por ID
router.get('/:id', function(req, res) {
	Zone.findById(req, function(err, zone) {
    	if(err) return res.send(500, err.message);
		res.status(200).jsonp(zone);
	})
})

//POST
/*router.post('/', auth, function(req, res) {
	Zone.addZone(req, function(err, zone) {
		if(err) return res.send(500, err.message);
		res.status(200).jsonp(zone);
	})
})*/

//POST - Crear una nueva zona
router.post('/', function(req, res) {
	Zone.addZone(req, function(err, zone) {
		if(err) return res.status(500).send(err.message);
		res.status(200).jsonp(zone);
	})
})

module.exports = router