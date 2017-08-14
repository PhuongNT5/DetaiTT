(function () {
    'use strict';

    angular.module('app.examination')
        .directive('listTest', listTest);

    /* @ngInject */
    function listTest() {
        var directive = {
            restrict: 'EA',
            scope: {
                test: '=',
                create: '&'
            },
            templateUrl: 'app/shared/directives/test/list-test.html',
        };
        return directive;
    }
    listTestController.$inject = ['$scope'];
    function listTestController($scope) {
        var vm = this;

    }

})();