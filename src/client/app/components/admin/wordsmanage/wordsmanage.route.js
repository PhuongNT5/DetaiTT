(function () {
    angular.module('app.wordsmanage')
        .config(wordsmanageConfig);

    function wordsmanageConfig($stateProvider) {
        $stateProvider
            .state('admin.wordsmanage', {
                url: '/wordsmanage',
                templateUrl: 'app/components/admin/wordsmanage/wordsmanage.html',
                controller: 'wordsmanageController',
                controllerAs: 'vm'
            });
    }
})()
