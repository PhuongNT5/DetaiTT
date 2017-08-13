(function () {
    angular.module('app.grammarmanage')
        .config(grammarmanageConfig);

    function grammarmanageConfig($stateProvider) {
        $stateProvider
            .state('admin.grammarmanage', {
                url: '/grammarmanage',
                templateUrl: 'app/components/admin/grammarmanage/grammarmanage.html',
                controller: 'grammarmanageController',
                controllerAs: 'vm'
            });
    }
})()
