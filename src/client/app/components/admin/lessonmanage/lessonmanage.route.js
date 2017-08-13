(function () {
    angular.module('app.lessonmanage')
        .config(lessonmanageConfig);

    function lessonmanageConfig($stateProvider) {
        $stateProvider
            .state('admin.lessonmanage', {
                url: '/lessonmanage',
                templateUrl: 'app/components/admin/lessonmanage/lessonmanage.html',
                controller: 'lessonmanageController',
                controllerAs: 'vm'
            });
    }
})()
