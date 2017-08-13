var router = require('express').Router();
var grammarController = require('./../controllers/grammar.controller');

module.exports = function () {

    router.post('/', grammarController.createGrammars);
    router.get('/', grammarController.getGrammars);
    router.put('/:_id', grammarController.updateGrammar);
    router.delete('/:grammar_id', grammarController.deleteGrammar);
    // router.get('/:_id', grammarController.getGrammar);

    return router;
} 