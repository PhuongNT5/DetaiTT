(function () {
    angular.module('app.usermanage')
        .config(usermanageConfig);

    function usermanageConfig($stateProvider) {
        $stateProvider
            .state('admin.usermanage', {
                url: '/usermanage',
                templateUrl: 'app/components/admin/usermanage/usermanage.html',
                controller: 'usermanageController',
                controllerAs: 'vm'
            });
    }
})()
