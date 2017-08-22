angular.module('app.admin')
    .component('createWord', {
        templateUrl: 'app/components/admin/wordsmanage/createword/createword.html',
        controller: createwordController,
        controllerAs: 'vm',
        bindings: {

        }
    });
createwordController.$inject = ['$q', '$http', '$state', '$scope', 'vocabularyService', 'lessonService'];

function createwordController($q, $http, $state, $scope, vocabularyService, lessonService) {
    var vm = this;
    vm.lesson = {};
    vm.createWord = createWord;
    // init();
    function createWord() {
        function successCallBack(response) {
            $state.go('admin.wordsmanage', { reload: true });
            var obj = {
                vocabularyId: response._id,
            }
            lessonService.updateLesson(response.lesson_id, obj).then(function (lesson) {
                $state.go('admin.wordsmanage', { reload: true });
            }, function (err) {
                console.log(err);
            })
        }

        function errorCallBack(err) {
            console.log(err);
        }
        vocabularyService.createVocabulary(vm.vocabulary).then(successCallBack, errorCallBack);

    };

}