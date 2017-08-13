(function () {
    angular.module('app.test')
        .controller('testController', testController);
    testController.$inject = ['$q', '$scope', '$http', '$state', '$stateParams', 'questionService', '$interval', 'scoreService', 'authService'];
    function testController($q, $scope, $http, $state, $stateParams, questionService, $interval, scoreService, authService) {
        var vm = this;
        var numberQues = 10;
        vm.questions = {};
        vm.count = 0;
        vm.checkAns = '';
        vm.status = 'todo';
        vm.countdown = 900;
        vm.startTimer = startTimer;
        vm.stopTimer = stopTimer;
        vm.pauseTimer = pauseTimer;
        vm.countdownTimer = 0;
        vm.isDisable = false;
        vm.score = {};

        init();
        var user = authService.getToken();

        $scope.get_val = function (event) {
            vm.status = 'submited';
            vm.isDisable = true;
            for (var i = 1; i < 11; i++) {
                if (vm.questions[i]) {
                    if (vm.questions[i].select === vm.questions[i].answer) {
                        vm.count++;
                    }
                } else continue;
            }
            stopTimer();
            console.log(user._id);
            var obj = {
                userId: user._id,
                testId: $stateParams.test_id,
                score: vm.count
            }
            scoreService.createScore(obj).then(function (response) {
                console.log("Create succsess");
            }, function (err) {
                console.log(err);
            })
        };

        function init() {
            function succeedCallback(question) {
                vm.questions = question;
            }

            function errorCallback(err) {
                console.log(err);
            }
            questionService.getRanQuestion($stateParams.test_id).then(succeedCallback, errorCallback);
            displayTimer(0);
            if (vm.countdown > 0) {
                startTimer(vm.countdown);
            }
        }
        function pauseTimer() {
            return parseInt(moment(vm.countdownTimer, "HH:mm:ss").format('ss'));
        }
        function startTimer(duration) {
            var timer = duration;
            displayTimer(timer);
            vm.timeInterval = $interval(function () {
                displayTimer(timer);
                if (timer <= 0) {
                    $interval.cancel(vm.timeInterval);
                    vm.timeInterval = null;
                } else {
                    timer--;
                }
            }, 1000);
        }
        function displayTimer(timer) {
            var hours, minutes, seconds;
            hours = parseInt(timer / 3600, 10);
            minutes = parseInt((timer - (hours * 3600)) / 60, 10);
            seconds = parseInt(timer % 60, 10);

            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            vm.countdownTimer = hours + ":" + minutes + ":" + seconds;

            if (minutes < 5) {
                vm.primaryTimer = true;
            } else {
                vm.primaryTimer = false;
            }
        }
        function stopTimer() {
            if (vm.timeInterval) {
                $interval.cancel(vm.timeInterval);
                vm.timeInterval = null;
            }
        }
    }

})();