(function () {
    angular.module('app.grammarmanage')
        .controller('grammarmanageController', grammarmanageController);
    grammarmanageController.$inject = ['$q', '$http', '$state', 'grammarService'];
    function grammarmanageController($q, $http, $state, grammarService) {
        var vm = this;
        vm.grammar = {};
        vm.deleteGrammar = deleteGrammar
        vm.turnActive = turnActive;
        vm.turn = 0;
        function turnActive(state) {
            vm.turn = state;
        }
        init();
        function init() {
            function succeedCallback(grammar) {
                vm.grammars = grammar;
            }

            function errorCallback(err) {
                console.log(err);
            }
            grammarService.loadGrammar().then(function (grammar) {
                vm.grammars = grammar;
            }, errorCallback);
        }
        function deleteGrammar(grammarId) {
            function successCallBack(response) {
                $state.go('admin.grammarmanage', { reload: true });
                grammarService.loadGrammar().then(function (grammar) {
                    vm.grammars = grammar;
                }, function (err) {
                    console.log(err);
                });
            }

            function errorCallback(err) {
                console.log(err);
            }
            grammarService.deleteGrammar(grammarId).then(succeedCallback, errorCallback);
        }
    }

})();