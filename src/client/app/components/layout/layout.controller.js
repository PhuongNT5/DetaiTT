angular.module('app.layout')
    .controller('layoutController', layoutController);
layoutController.$inject = ['$state', 'authService'];
function layoutController($state, authService) {
    var vm = this;
    vm.namePage = 'DASHBOARD';
    vm.logout = logout;
    vm.name = '';
    function logout() {
        toastr.success(authService.logout());
        $state.go('auth.login');
    }
    init();
    function init() {
        var a = authService.getToken();
        vm.name = a.firstname + a.lastname;
    }
}