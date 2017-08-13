(function () {
    'use strict';

    angular.module('app.unit')
        .directive('listLesson', listLesson);

    /* @ngInject */
    function listLesson() {
        var directive = {
            restrict: 'EA',
            scope: {
                lesson: '=',
            },
            templateUrl: 'app/shared/directives/lesson/list-lesson.html'
        };

        listLessonController.$inject = ['$scope', 'lessonService'];
        function listLessonController($scope, lessonService) {
            var lessonId = $state.params.lesson_id;
            var vm = this;
            vm.lesson = {};

        }
        return directive;
    }

})();