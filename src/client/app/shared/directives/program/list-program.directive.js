(function () {
    'use strict';

    angular.module('app.program')
        .directive('listProgram', listProgram);

    /* @ngInject */
    function listProgram() {
        var directive = {
            restrict: 'EA',
            scope: {
                program: '=',
            },
            templateUrl: 'app/shared/directives/program/list-program.html'
        };

        return directive;
    }
})();