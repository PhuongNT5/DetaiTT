(function () {
    angular.module('app.unit')
        .controller('unitController', unitController);
    unitController.$inject = ['$q', '$http', '$state', 'unitService', 'lessonService'];
    function unitController($q, $http, $state, unitService, lessonService) {
        var unitId = $state.params.unit_id;
        var vm = this;
        vm.unit = {};
        vm.lesson = {};
        vm.loadLesson = loadLesson;
        vm.grammars = {};
        init();
        function init() {

            function succeedCallback(unit) {
                vm.unit = unit;
            }

            function errorCallback(err) {
                console.log(err);
            }
            unitService.getUnitByUnitId(unitId).then(succeedCallback, errorCallback);
        }
        function loadLesson(lessonId) {

            function succeedCallback(lesson) {
                vm.lesson = lesson;
                vm.grammars = lesson.grammarId;
            }

            function errorCallback(err) {
                console.log(err);
            }
            lessonService.getLessonById(lessonId).then(succeedCallback, errorCallback);
        }

    }
})();
