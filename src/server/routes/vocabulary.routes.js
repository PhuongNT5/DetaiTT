var router = require('express').Router();
var vocabularyController = require('./../controllers/vocabulary.controller');

module.exports = function () {

    router.post('/', vocabularyController.createWords);
    router.get('/', vocabularyController.getWords);
    router.put('/:vocabulary_id', vocabularyController.updateWord);
    router.get('/:vocabulary_id', vocabularyController.getWord);

    return router;
} 