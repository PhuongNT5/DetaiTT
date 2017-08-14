angular.module('app.admin')
    .component('createLesson', {
        templateUrl: 'app/components/admin/lessonmanage/createlesson/createlesson.html',
        controller: createlessonController,
        controllerAs: 'vm',
        bindings: {

        }
    });
createlessonController.$inject = ['$q', '$http', '$state', '$scope', 'lessonService', 'unitService'];

function createlessonController($q, $http, $state, $scope, lessonService, unitService) {
    var vm = this;
    vm.lesson = {};
    vm.createlesson = createlesson;
    vm.units = '';
    init();
    function createlesson() {
        function successCallBack(response) {
            $state.go('admin.lessonmanage', { reload: true });
            lessonService.loadLessons().then(function (lesson) {
                vm.lesson = lesson;
            }, function (err) {
                console.log(err);
            });
        }

        function errorCallBack(err) {
            console.log(err);
        }
        lessonService.createLesson(vm.lesson).then(successCallBack, errorCallBack);

    };
    function init() {
        unitService.loadUnits().then(function (unit) {
            vm.units = unit;
            console.log(vm.units);
        }, function (err) {
            console.log(err);
        })
    }

}