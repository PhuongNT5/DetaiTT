var router = require('express').Router();
var questionController = require('./../controllers/question.controller');

module.exports = function () {

    router.post('/', questionController.createQuestion);
    router.get('/', questionController.getQuestions);
    router.put('/:question_id', questionController.updateQuestion);
    router.get('/getRand/:test_id', questionController.getRanQuestion);
    router.delete('/:question_id', questionController.deleteQuestion);
    router.get('/:test_id', questionController.getQuestionByTest);

    return router;
} 