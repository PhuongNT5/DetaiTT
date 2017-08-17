(function () {
    angular.module('app.testlevel')
        .config(testlevelConfig);

    function testlevelConfig($stateProvider) {
        $stateProvider
            .state('layout.testlevel', {
                url: '/testlevel',
                templateUrl: 'app/components/testlevel/testlevel.html',
                controller: 'testlevelController',
                controllerAs: 'vm'
            });
    }
})()
