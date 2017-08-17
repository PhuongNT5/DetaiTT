(function () {
    angular.module('app.testdetail')
        .controller('testdetailController', testdetailController);
    testdetailController.$inject = ['$q', '$scope', '$http', '$state', '$stateParams', 'testdetailService', '$interval', 'authService', 'testService', 'scoreService'];
    function testdetailController($q, $scope, $http, $state, $stateParams, testdetailService, $interval, authService, testService, scoreService) {
        var vm = this;
        var numberQues = 900;
        vm.questions = {};
        vm.questionA = {};
        vm.count = 0;
        vm.checkAns = '';
        vm.status = 'todo';
        vm.countdown = 10;
        vm.startTimer = startTimer;
        vm.stopTimer = stopTimer;
        vm.pauseTimer = pauseTimer;
        vm.countdownTimer = 0;
        vm.isDisable = false;
        vm.score = {};
        vm.questionX = [];
        vm.TestID = '';
        vm.testId = $stateParams.testId;
        vm.getResult = getResult,
            vm.testinfo = {};

        init();
        var user = authService.getToken();
        function getTest() {
            testdetailService.getTestDetailInfoById(vm.testId).then(function (infotest) {
                vm.testinfo = infotest;
                vm.TestID = vm.testinfo.testId._id;
                console.log(vm.TestID);
            }, function (err) {
                toastr.error(err.message);
            });
        }
        getTest();


        function getResult(event) {
            vm.status = 'submited';
            vm.isDisable = true;
            testdetailService.getTestDetailById(vm.testId).then(function (response) {
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
            });
            stopTimer();

            var obj = {
                userId: user._id,
                testId: vm.TestID,
                score: vm.count
            }
            console.log(obj);
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
            testdetailService.getTestDetailById(vm.testId).then(succeedCallback, errorCallback);
            displayTimer(0);
            if (vm.countdown > 0) {
                startTimer(vm.countdown);
            }
            if (vm.countdown == 0) {
                getResult();
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