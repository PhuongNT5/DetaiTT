/*jshint esversion: 6*/

(function () {
    angular.module('app.homepage')
        .controller('HomePageController', ['$q', '$http', '$state', 'authService', HomepageController]);

    function HomepageController($q, $http, $state, authService) {
        var vm = this;
        vm.name = '';
        init();
        function init() {
            var a = authService.getToken();
            vm.name = a.firstname + a.lastname;
        }
    }
})();