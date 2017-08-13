(function () {
    angular.module('app.result')
        .config(resultConfig);

    function resultConfig($stateProvider) {
        $stateProvider
            .state('layout.result', {
                url: '/result',
                templateUrl: 'app/components/result/result.html',
                controller: 'resultController',
                controllerAs: 'vm'
            });
    }
})()
