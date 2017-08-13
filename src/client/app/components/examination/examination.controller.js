
(function () {
    angular.module('app.examination')
        .controller('examinationController', examinationController);
    examinationController.$inject = ['$q', '$http', '$state', 'testService', 'scoreService', 'authService'];
    function examinationController($q, $http, $state, testService, scoreService, authService) {
        var vm = this;
        vm.Level = $state.params.level;
        vm.test = {};
        vm.createScore = createScore;
        init();
        function init() {

            function succeedCallback(tests) {
                vm.test = tests;
            }

            function errorCallback(err) {
                console.log(err);
            }
            testService.getTestByLevel(vm.Level).then(succeedCallback, errorCallback);

        }
        var user = authService.getToken();
        function createScore(testId) {
            var obj = {
                testId: testId,
                userId: user._id
            }
            scoreService.createScore(obj).then(function (score) {
                vm.score = score;
            }, function (err) {
                console.log(err);
            })
        }


    }
})();