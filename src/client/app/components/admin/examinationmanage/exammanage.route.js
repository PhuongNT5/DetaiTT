(function () {
    angular.module('app.exammanage')
        .config(exammanageConfig);

    function exammanageConfig($stateProvider) {
        $stateProvider
            .state('admin.exammanage', {
                url: '/exammanage',
                templateUrl: 'app/components/admin/examinationmanage/exammanage.html',
                controller: 'exammanageController',
                controllerAs: 'vm'
            });
    }
})()
