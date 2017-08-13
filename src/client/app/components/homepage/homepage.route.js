(function () {
    angular.module('app.homepage')
        .config(homeConfig);

    function homeConfig($stateProvider) {
        $stateProvider
            .state('layout.homepage', {
                url: '/homepage',
                templateUrl: 'app/components/homepage/homepage.html',
                controller: 'HomePageController',
                controllerAs: 'vm'
            });
    }
})()