var router = require('express').Router();
var unitController = require('./../controllers/unit.controller');

module.exports = function () {

    router.post('/', unitController.createUnit);
    router.get('/', unitController.getUnits);
    router.put('/:unit_id', unitController.updateUnit);
    router.get('/:unit_id', unitController.getUnit);
    router.delete('/:unit_id', unitController.deleteUnit);

    return router;
} 