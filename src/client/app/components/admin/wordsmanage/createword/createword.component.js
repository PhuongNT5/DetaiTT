angular.module('app.admin')
    .component('createWord', {
        templateUrl: 'app/components/admin/wordsmanage/createword/createword.html',
        controller: createwordController,
        controllerAs: 'vm',
        bindings: {

        }
    });
createwordController.$inject = ['$q', '$http', '$state', '$scope', 'vocabularyService'];

function createwordController($q, $http, $state, $scope, vocabularyService) {
    var vm = this;
    vm.lesson = {};
    vm.createWord = createWord;
    // init();
    function createWord() {
        function successCallBack(response) {
            $state.go('admin.wordsmanage', { reload: true });
            vocabularyService.loadVocabularies().then(function (vocabylary) {
                vm.vocabylary = vocabylary;
            }, function (err) {
                console.log(err);
            });
        }

        function errorCallBack(err) {
            console.log(err);
        }
        vocabularyService.createVocabulary(vm.vocabulary).then(successCallBack, errorCallBack);

    };

}