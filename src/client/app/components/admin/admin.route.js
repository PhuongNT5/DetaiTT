(function () {
    angular.module('app.admin')
        .config(adminConfig);

    function adminConfig($stateProvider) {
        $stateProvider
            .state('admin', {
                url: '/admin',
                templateUrl: 'app/components/admin/admin.html',
                controller: 'adminController',
                controllerAs: 'vm'
            });
    }
})()