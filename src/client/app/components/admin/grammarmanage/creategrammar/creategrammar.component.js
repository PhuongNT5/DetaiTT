angular.module('app.admin')
    .component('createGram', {
        templateUrl: 'app/components/admin/grammarmanage/creategrammar/creategrammar.html',
        controller: creategrammarController,
        controllerAs: 'vm',
        bindings: {

        }
    });
creategrammarController.$inject = ['$q', '$http', '$state', '$scope', 'grammarService', 'lessonService'];

function creategrammarController($q, $http, $state, $scope, grammarService, lessonService) {
    var vm = this;
    vm.lesson = {};
    vm.createGram = createGram;
    // init();
    function createGram() {
        function successCallBack(response) {
            $state.go('admin.grammarmanage', { reload: true });
            var obj = {
                grammarId: response._id,
            }
            lessonService.updateLesson(response.lesson_id, obj).then(function (lesson) {
                $state.go('admin.grammarmanage', { reload: true });
            }, function (err) {
                console.log(err);
            })
        }

        function errorCallBack(err) {
            console.log(err);
        }
        grammarService.createGrammar(vm.grammar).then(successCallBack, errorCallBack);

    };

}