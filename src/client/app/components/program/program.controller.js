
(function () {
    angular.module('app.program')
        .controller('programController', programController);
    programController.$inject = ['$q', '$http', '$state', 'unitService'];
    function programController($q, $http, $state, unitService) {
        var vm = this;
        init();

        function init() {

            function succeedCallback(units) {
                vm.unit = units;
            }

            function errorCallback(err) {
                console.log(err);
            }
            unitService.loadUnits().then(succeedCallback, errorCallback);
        }
    }
})();