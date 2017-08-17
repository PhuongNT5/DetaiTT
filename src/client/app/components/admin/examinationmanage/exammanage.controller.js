(function () {
    angular.module('app.exammanage')
        .controller('exammanageController', exammanageController);
    exammanageController.$inject = ['$q', '$http', '$state', 'testService', '$stateParams', 'testdetailService', 'questionService'];
    function exammanageController($q, $http, $state, testService, $stateParams, testdetailService, questionService) {
        var vm = this;
        vm.test = {};
        vm.turnActive = turnActive;
        vm.turn = 0;
        vm.Level = $state.params.level;
        vm.deleteTest = deleteTest,
            vm.loadQuestion = loadQuestion;
        vm.listquestion = {};
        vm.notQuestion = false;
        vm.totaltime = 0;
        vm.getQuestion = getQuestion;
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
            }

            function errorCallback(err) {
                console.log(err);
            }
            testService.loadTests().then(succeedCallback, errorCallback);
        }
        function deleteTest(testId) {
            function succeedCallback(response) {
                $state.go('admin.exammanage', { reload: true });
                toastr.err('Xóa thành công');
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

        function loadQuestion(testId) {
            testdetailService.getTestDetailByTestId(testId).then(function (listquestion) {
                vm.listquestion = listquestion;
                if (vm.listquestion.questionId === undefined) {
                    vm.notQuestion = true;
                }
            }, function (err) {
                console.log(err);
            })
        }

        function getQuestion() {
            questionService.loadQuestions().then(function (question) {
                vm.questions = question;
            }, function (err) {
                console.log(err);
            });
        }
    }

})();