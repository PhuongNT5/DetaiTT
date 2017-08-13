(function () {
    angular.module('app.test')
        .config(testConfig);

    function testConfig($stateProvider) {
        $stateProvider
            .state('layout.test', {
                url: '/test/:test_id',
                templateUrl: 'app/components/test/test.html',
                controller: 'testController',
                controllerAs: 'vm'
            });
    }
})()
