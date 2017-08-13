var router = require('express').Router();
var testController = require('./../controllers/test.controller');

module.exports = function () {

    router.post('/', testController.createTest);
    router.get('/', testController.getTests);
    router.put('/:test_id', testController.updateTest);
    router.get('/:test_id', testController.getTest);
    router.get('/Lv/:level', testController.getTestsByLevel);
    router.delete('/:test_id', testController.deleteTest);
    return router;
} 