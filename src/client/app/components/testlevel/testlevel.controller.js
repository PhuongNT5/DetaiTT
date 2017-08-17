
(function () {
    angular.module('app.testlevel')
        .controller('testlevelController', testlevelController);
    testlevelController.$inject = ['$q', '$http', '$state', 'testdetailService', 'scoreService', 'authService'];
    function testlevelController($q, $http, $state, testdetailService, scoreService, authService) {
        var vm = this;
        vm.Level = $state.params.level;
        vm.test = {};
        // vm.createScore = createScore;
        vm.leveluser = '';
        init();
        function init() {

            function succeedCallback(testlevels) {
                vm.testlevels = testlevels;
            }

            function errorCallback(err) {
                console.log(err);
            }
            testdetailService.loadTestDetails().then(succeedCallback, errorCallback);

        }
        var user = authService.getToken();
        vm.leveluser = user.level;
        vm.leveluser = user.level;
        // function createScore(testId) {
        //     var obj = {
        //         testId: testId,
        //         userId: user._id
        //     }
        //     scoreService.createScore(obj).then(function (score) {
        //         vm.score = score;
        //     }, function (err) {
        //         console.log(err);
        //     })
        // }


    }
})();