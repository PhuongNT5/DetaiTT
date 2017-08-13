(function () {
    angular.module('app.createquestion')
        .config(createquestionConfig);

    function createquestionConfig($stateProvider) {
        $stateProvider
            .state('admin.createquestion', {
                url: '/createquestion',
                templateUrl: 'app/components/admin/createquestion/createquestion.html',
                controller: 'createquestionController',
                controllerAs: 'vm'
            });
    }
})()
