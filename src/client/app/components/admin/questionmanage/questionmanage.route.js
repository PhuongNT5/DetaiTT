(function () {
    angular.module('app.questionmanage')
        .config(questionmanageConfig);

    function questionmanageConfig($stateProvider) {
        $stateProvider
            .state('admin.questionmanage', {
                url: '/questionmanage',
                templateUrl: 'app/components/admin/questionmanage/questionmanage.html',
                controller: 'questionmanageController',
                controllerAs: 'vm'
            });
    }
})()
