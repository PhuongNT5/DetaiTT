(function () {
    angular.module('app.unit')
        .config(unitConfig);

    function unitConfig($stateProvider) {
        $stateProvider
            .state('layout.unit', {
                url: '/unit/:unit_id',
                templateUrl: 'app/components/unit/unit.html',
                controller: 'unitController',
                controllerAs: 'vm'
            });
    }
})()