angular.module('app.admin')
    .component('createLesson', {
        templateUrl: 'app/components/admin/lessonmanage/createlesson/createlesson.html',
        controller: createlessonController,
        controllerAs: 'vm',
        bindings: {

        }
    });
createlessonController.$inject = ['$q', '$http', '$state', '$scope', 'lessonService'];

function createlessonController($q, $http, $state, $scope, lessonService) {
    var vm = this;
    vm.lesson = {};
    vm.createlesson = createlesson;
    // init();
    function createlesson() {
        function successCallBack(response) {
            $state.go('admin.lessonmanage', { reload: true });
        }

        function errorCallBack(err) {
            console.log(err);
        }
        lessonService.createLesson(vm.lesson).then(successCallBack, errorCallBack);
        lessonService.loadLessons().then(function (lesson) {
            vm.lesson = lesson;
        }, function (err) {
            console.log(err);
        });
    };

}