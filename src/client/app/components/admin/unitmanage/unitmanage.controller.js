(function () {
    angular.module('app.unitmanage')
        .controller('unitmanageController', unitmanageController);
    unitmanageController.$inject = ['$q', '$http', '$state', 'unitService'];
    function unitmanageController($q, $http, $state, unitService) {
        var vm = this;
        vm.turnActive = turnActive;
        vm.turn = 0;
        vm.unit = {};
        vm.deleteUnit = deleteUnit;

        function turnActive(state) {
            vm.turn = state;
        }
        init();
        function init() {
            function succeedCallback(unit) {
                vm.unit = unit;
            }

            function errorCallback(err) {
                console.log(err);
            }
            unitService.loadUnits().then(function (unit) {
                vm.unit = unit;
            }, errorCallback);
        }
        function deleteUnit(unitId) {
            function succeedCallback(response) {
                $state.go('admin.unitmanage', { reload: true });
                unitService.loadUnits().then(function (unit) {
                    vm.unit = unit;
                }, function (err) {
                    console.log(err);
                });
            }

            function errorCallback(err) {
                console.log(err);
            }
            unitService.deleteUnit(unitId).then(succeedCallback, errorCallback);
        }

    }

})();