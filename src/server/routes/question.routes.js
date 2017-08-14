var router = require('express').Router();
var questionController = require('./../controllers/question.controller');

module.exports = function () {

    router.post('/', questionController.createQuestion);
    router.get('/', questionController.getQuestions);
    router.put('/:question_id', questionController.updateQuestion);
    router.get('/getRand/:level', questionController.getRanQuestion);
    router.delete('/:question_id', questionController.deleteQuestion);

    return router;
} 