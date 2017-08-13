(function () {
    angular.module('app.lesson')
        .config(lessonConfig);

    function lessonConfig($stateProvider) {
        $stateProvider
            .state('layout.lesson', {
                url: '/lesson',
                templateUrl: 'app/components/lesson/lesson.html',
                controller: 'lessonController',
                controllerAs: 'vm'
            });
    }
})()