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
        vm.deleteTest = deleteTest;
        vm.loadQuestion = loadQuestion;
        vm.listquestion = {};
        vm.notQuestion = false;
        vm.totaltime = 0;
        vm.getQuestion = getQuestion;
        vm.addQuestion = addQuestion;
        vm.removeQuestion = removeQuestion;
        vm.listQuestionChoiced = [];
        vm.saveQuestion = saveQuestion;
        vm.currentTestId = '';
        vm.checkExist = checkExist;
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
                vm.currentTestId = testId;
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

        function addQuestion(x) {
            vm.listQuestionChoiced.push(x);
        }
        function removeQuestion(x) {
            var a = vm.listQuestionChoiced.indexOf(x)
            vm.listQuestionChoiced.splice(a, 1);

        }

        function saveQuestion(testID) {
            var obj = {
                testId: testID,
                questionId: vm.listQuestionChoiced
            }
            if (vm.listQuestionChoiced.length < 5) {
                toastr.error('Đề thi phải có ít nhất 5 câu hỏi');
            }
            else {
                testdetailService.createTestDetail(obj).then(function (listques) {
                    toastr.error('Thêm câu hỏi vào đề thi thành công');
                    loadQuestion(testID);
                    $state.go('admin.exammanage', { reload: true });

                }, function (err) {
                    console.log(err);
                })
            }

        }
        function checkExist(questioncheck) {
            if (vm.listQuestionChoiced.indexOf(questioncheck) == -1) {
                return false;
            }
            else return true;
        }

    }

})();