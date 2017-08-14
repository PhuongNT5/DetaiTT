(function () {
    angular.module('app.usermanage')
        .controller('usermanageController', usermanageController);
    usermanageController.$inject = ['$q', '$http', '$state', 'userService'];
    function usermanageController($q, $http, $state, userService) {
        var vm = this;
        vm.user = {};
        vm.turnActive = turnActive;
        vm.turn = 0;
        function turnActive(state) {
            vm.turn = state;
        }
        init();
        function init() {
            console.log(123);
            function succeedCallback(user) {
                vm.user = user;
            }

            function errorCallback(err) {
                console.log(err);
            }
            userService.loadUsers().then(function (user) {
                vm.user = user.user;
            }, errorCallback);
        }
    }

})();