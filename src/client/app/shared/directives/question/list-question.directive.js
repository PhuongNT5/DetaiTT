(function () {
    'use strict';

    angular.module('app.test')
        .directive('listQuestion', listQuestion);
    /* @ngInject */
    function listQuestion() {
        var directive = {
            restrict: 'EA',
            scope: {
                question: '=',
                stt: '=',
                status: '='
            },
            templateUrl: 'app/shared/directives/question/list-question.html'
        };
        return directive;
    }

})();