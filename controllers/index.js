var express = require('express'),
    router = express.Router()

var dataModel = require('../models/data');

router.use('/zones', require('./zones'))
router.use('/stations', require('./stations'))

router.get("/", function(req, res)
{
    console.log(dataModel.msg);
    res.end();
});

router.get("/parametros/:nombre", function(req, res)
{
    dataModel.parametros(req.params.nombre);
    res.end();
});

router.get("/objeto", function(req,res)
{
	var objeto = dataModel.objeto;
	console.log(objeto.nombre + " tiene " + objeto.edad + " años y una web que se llama " + objeto.web);
	res.end();
});

module.exports = router