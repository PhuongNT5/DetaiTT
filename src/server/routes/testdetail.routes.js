var router = require('express').Router();
var testdetailController = require('./../controllers/testdetail.controller');

module.exports = function () {

    router.post('/', testdetailController.createTestDetail);
    router.get('/', testdetailController.getTestDetails);
    router.put('/:testId', testdetailController.updateTestDetail);
    router.get('/:_id', testdetailController.getTestDetail);
    router.get('/getinfo/:_id', testdetailController.getTestDetailInfo);
    router.get('/getbyTest/:testId', testdetailController.getTestDetailByTestId);
    return router;
} 