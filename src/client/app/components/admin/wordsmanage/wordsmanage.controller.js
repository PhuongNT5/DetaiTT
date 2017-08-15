(function () {
    angular.module('app.wordsmanage')
        .controller('wordsmanageController', wordsmanageController);
    wordsmanageController.$inject = ['$q', '$http', '$state', 'vocabularyService', 'lessonService'];
    function wordsmanageController($q, $http, $state, vocabularyService, lessonService) {
        var vm = this;
        vm.vocabulary = {};

        vm.turnActive = turnActive;
        vm.turn = 0;
        function turnActive(state) {
            vm.turn = state;
        }
        init();
        function init() {
            function succeedCallback(vocabularies) {
                vm.vocabularies = vocabularies;
            }

            function errorCallback(err) {
                console.log(err);
            }
            vocabularyService.loadVocabularies().then(function (vocabularies) {
                vm.vocabularies = vocabularies;
            }, errorCallback);
            lessonService.loadLessons().then(function (lessons) {
                vm.lessons = lessons;
            }, errorCallback);
        }
    }

})();