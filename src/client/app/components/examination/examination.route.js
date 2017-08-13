(function () {
    angular.module('app.examination')
        .config(examinationConfig);

    function examinationConfig($stateProvider) {
        $stateProvider
            .state('layout.examination', {
                url: '/examination/:level',
                templateUrl: 'app/components/examination/examination.html',
                controller: 'examinationController',
                controllerAs: 'vm'
            });
    }
})()