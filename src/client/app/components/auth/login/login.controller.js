'use strict';
(function () {
    angular.module('app.login')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$scope', '$state', 'authService'];

    function LoginController($scope, $state, authService) {
        var vm = this;
        $scope.$parent.vm.a = 1;
        vm.login = login;

        function login() {
            var request = {
                email: vm.email,
                password: vm.password
            };
            var a = authService.getToken();
            return authService.login(request, vm.remember === true ? 1 : 0).then(function (res) {
                toastr.success(res);
                if (a.roles == 'admin') {
                    $state.go('admin');
                }
                else if (a.roles == 'user') {
                    $state.go('layout.homepage');
                }
            }, function (err) {
                toastr.error(err);
            });
        }
    }
})()
