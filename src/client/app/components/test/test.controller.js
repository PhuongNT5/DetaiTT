(function () {
    angular.module('app.test')
        .controller('testController', testController);
    testController.$inject = ['$q', '$scope', '$http', '$state', '$stateParams', 'questionService', '$interval', 'scoreService', 'authService', 'testService'];
    function testController($q, $scope, $http, $state, $stateParams, questionService, $interval, scoreService, authService, testService) {
        var vm = this;
        var numberQues = 10;
        vm.questions = {};
        vm.questionA = {};
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
        vm.questionX = [];
        vm.TestID = '';
        vm.level = $stateParams.level;

        init();
        var user = authService.getToken();
        function getTest() {
            testService.loadTests().then(function (test) {
                vm.TestID = test._id;
            }, function (err) {
                console.log(err);
            })
        }
        getTest();
        $scope.get_val = function (event) {
            vm.status = 'submited';
            vm.isDisable = true;
            questionService.loadQuestions().then(function (response) {
                vm.questionA = response;

                // for (var i = 0; i < 20; i++) {
                //     for (var j = 0; j < 5; j++) {
                //         if (vm.questions[j]) {
                //             if (vm.questions[j].question_id == vm.questionA[i].question_id) {
                //                 vm.questionX.push(vm.questionA[i]);
                //                 if (vm.questions[j].select === vm.questionA[i].answer) {
                //                     vm.count++;

                //                 }
                //             }
                //         }
                //     }
                // }
                response.map((val) => {
                    for (var i = 0; i < 5; i++) {
                        if (val.question_id == vm.questions[i].question_id) {
                            vm.questions[i].answer = val.answer;
                        }
                    }
                });
                vm.count = vm.questions.filter((val) => {
                    for (var i = 0; i < 5; i++) {
                        if (val.answer == vm.questions[i].select) {
                            return val;
                        }
                    }
                }).length;
            }, function (err) {
                console.log(err);
            })
            stopTimer();
            var obj = {
                userId: user._id,
                testId: vm.TestID,
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
            questionService.getRanQuestion($stateParams.level).then(succeedCallback, errorCallback);
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