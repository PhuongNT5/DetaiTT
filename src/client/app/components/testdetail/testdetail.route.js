(function () {
    angular.module('app.testdetail')
        .config(testdetailConfig);

    function testdetailConfig($stateProvider) {
        $stateProvider
            .state('layout.testdetail', {
                url: '/testdetail/:testId',
                templateUrl: 'app/components/testdetail/testdetail.html',
                controller: 'testdetailController',
                controllerAs: 'vm'
            });
    }
})()
