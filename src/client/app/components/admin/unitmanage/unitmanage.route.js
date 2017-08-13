(function () {
    angular.module('app.unitmanage')
        .config(unitmanageConfig);

    function unitmanageConfig($stateProvider) {
        $stateProvider
            .state('admin.unitmanage', {
                url: '/unitmanage',
                templateUrl: 'app/components/admin/unitmanage/unitmanage.html',
                controller: 'unitmanageController',
                controllerAs: 'vm'
            });
    }
})()
