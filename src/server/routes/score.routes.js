var router = require('express').Router();
var scoreController = require('./../controllers/score.controller');

module.exports = function () {

    router.post('/', scoreController.createScore);
    router.get('/', scoreController.getScores);
    router.put('/', scoreController.updateScore);
    router.get('/:userId', scoreController.getScoreByUserId);

    return router;
} 