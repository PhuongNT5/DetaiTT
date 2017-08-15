angular.module('app.admin')
    .component('createUser', {
        templateUrl: 'app/components/admin/createuser/createuser.html',
        controller: createuserController,
        controllerAs: 'vm',
        bindings: {

        }
    });
createuserController.$inject = ['$q', '$http', '$state', '$scope', 'userService'];

function createuserController($q, $http, $state, $scope, userService) {
    var vm = this;
    vm.user = {};
    vm.createUser = createUser;
    function createUser() {
        if (validateForm()) {
            userService.createUser(vm.user).then(successCallBack, errorCallBack);;
        }
    }

    function validateForm() {
        var isValid = true;

        if (!vm.user.username || vm.user.username && vm.user.username.length < 6) {
            toastr.error(err);
            isValid = false;
        }

        if (!vm.user.email) {
            toastr.error(err);
            isValid = false;
        }

        if (!vm.user.lastname || vm.user.lastname.length == 0) {
            toastr.error(err);
            isValid = false;
        }

        if (!vm.user.password || vm.user.password.length == 0) {
            toastr.error(err);
            isValid = false;
        }
        if (!vm.user.phone || vm.user.phone.length > 11) {
            toastr.error(err);
            isValid = false;
        }

        if (!vm.user.confirmPassword || vm.user.confirmPassword != vm.user.password) {
            toastr.error(err);
            isValid = false;
        }

        return isValid;
    }

    function successCallBack(response) {
        $state.go('admin.usermanage');
        userService.createUser(vm.user).then(function (user) {
            vm.user = user;
        }, function (err) {
            console.log(err);
        });;
    }

    function errorCallBack(err) {
        if (err) {
            for (var i = 0; i < err.Errors.length; i++) {
                toastr.error(err.Errors[i]);
            }
        }
    }

}