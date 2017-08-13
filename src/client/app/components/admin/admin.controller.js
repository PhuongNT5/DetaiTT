(function () {
    angular.module('app.admin')
        .controller('adminController', adminController);
    adminController.$inject = ['$q', '$http', '$state', 'authService'];
    function adminController($q, $http, $state, authService) {
        var vm = this;
        vm.turnActive = turnActive;
        vm.turn = 0;

        function turnActive(state) {
            vm.turn = state;
        }
        vm.name = '';
        init();
        function init() {

            var a = authService.getToken();
            vm.name = a.firstname + a.lastname;

        }
    }

})();