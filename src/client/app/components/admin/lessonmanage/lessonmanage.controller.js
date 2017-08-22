(function () {
    angular.module('app.lessonmanage')
        .controller('lessonmanageController', lessonmanageController);
    lessonmanageController.$inject = ['$q', '$http', '$state', 'lessonService', 'unitService'];
    function lessonmanageController($q, $http, $state, lessonService, unitService) {
        var vm = this;
        vm.turnActive = turnActive;
        vm.turn = 0;
        vm.units = {};
        vm.deleteLesson = deleteLesson;
        function turnActive(state) {
            vm.turn = state;
        }
        vm.lesson = {};
        init();
        function init() {
            function succeedCallback(lesson) {
                vm.lesson = lesson;
            }

            function errorCallback(err) {
                console.log(err);
            }
            lessonService.loadLessons().then(function (lesson) {
                vm.lesson = lesson;
            }, errorCallback);
            unitService.loadUnits().then(function (unit) {
                vm.units = unit;
            }, errorCallback);
        }

        function deleteLesson(lessonId) {
            function succeedCallback(response) {
                $state.go('admin.lessonmanage', { reload: true });
                lessonService.loadLessons().then(function (lesson) {
                    vm.lesson = lesson;
                }, function (err) {
                    console.log(err);
                });
            }

            function errorCallback(err) {
                console.log(err);
            }
            lessonService.getLessonById(lessonId).then(function (lesson) {
                if ((lesson.vocabularyId.length == 0) && (lesson.grammarId.length) == 0) {
                    lessonService.deleteLesson(lessonId).then(succeedCallback, errorCallback);
                }
                else {
                    toastr.error('Lesson must not delete. Exist vocabulary and grammar');
                }
            }, function (err) {
                console.log(err);
            })
            // lessonService.deleteLesson(lessonId).then(succeedCallback, errorCallback);
        }
    }

})();