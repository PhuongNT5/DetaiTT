angular.module('app.admin')
    .component('createNew', {
        templateUrl: 'app/components/admin/createnew/createnew.html',
        controller: createnewController,
        controllerAs: 'vm',
        bindings: {

        }
    });
createnewController.$inject = ['$q', '$http', '$state', '$scope', 'unitService'];

function createnewController($q, $http, $state, $scope, unitService) {
    var vm = this;
    vm.unit = {};
    vm.createunit = createunit;
    // init();
    function createunit() {
        function successCallBack(response) {
            $state.go('admin.unitmanage', { reload: true });
            unitService.loadUnits().then(function (unit) {
                vm.unit = unit;
            }, function (err) {
                console.log(err);
            });
        }

        function errorCallBack(err) {
            console.log(err);
            toastr.error(err.message);
        }
        unitService.createUnit(vm.unit).then(successCallBack, errorCallBack);
    };

}