(function () {
    angular.module('app.exammanage')
        .controller('exammanageController', exammanageController);
    exammanageController.$inject = ['$q', '$http', '$state', 'testService', '$stateParams'];
    function exammanageController($q, $http, $state, testService, $stateParams) {
        var vm = this;
        vm.test = {};
        vm.turnActive = turnActive;
        vm.turn = 0;
        vm.Level = $state.params.level;
        vm.deleteTest = deleteTest,
            vm.totaltime = 0;
        function turnActive(state) {
            vm.turn = state;
        }
        init();
        function init() {
            function succeedCallback(test) {
                angular.forEach(test, function (e) {
                    if (e.time) {
                        e.time = Date.parse(e.time);
                    }
                }, this);
                vm.test = test;
                console.log(vm.test);
            }

            function errorCallback(err) {
                console.log(err);
            }
            testService.loadTests().then(succeedCallback, errorCallback);
        }
        function succeedCallback(message) {
            toastr.err('Xóa thành công');
        }

        function errorCallback(err) {
            console.log(err);
        }
        function deleteTest(testId) {
            function succeedCallback(response) {
                $state.go('admin.exammanage', { reload: true });
                testService.loadTests().then(function (test) {
                    vm.test = test;
                }, function (err) {
                    console.log(err);
                });
            }

            function errorCallback(err) {
                console.log(err);
            }
            testService.deleteTest(testId).then(succeedCallback, errorCallback);
        }
    }

})();