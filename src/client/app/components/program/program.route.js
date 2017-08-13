(function () {
    angular.module('app.program')
        .config(programConfig);

    function programConfig($stateProvider) {
        $stateProvider
            .state('layout.program', {
                url: '/program',
                templateUrl: 'app/components/program/program.html',
                controller: 'programController',
                controllerAs: 'vm'
            });
    }
})()