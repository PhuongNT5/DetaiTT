(function () {
    angular.module('app.questionmanage')
        .controller('questionmanageController', questionmanageController);
    questionmanageController.$inject = ['$q', '$http', '$state', 'questionService', 'testdetailService'];
    function questionmanageController($q, $http, $state, questionService, testdetailService) {
        var vm = this;
        vm.question = {};
        vm.turnActive = turnActive;
        vm.turn = 0;
        vm.deleteQuestion = deleteQuestion;
        vm.addQuestion = addQuestion;
        function turnActive(state) {
            vm.turn = state;
        }
        init();
        function init() {
            function succeedCallback(user) {
                vm.questions = question;
            }

            function errorCallback(err) {
                console.log(err);
            }
            questionService.loadQuestions().then(function (question) {
                vm.questions = question;
            }, errorCallback);
        }
        function addQuestion() {

        }

        function deleteQuestion(questionId) {
            function succeedCallback(response) {
                $state.go('admin.questionmanage', { reload: true });
                questionService.loadQuestions().then(function (question) {
                    vm.questions = question;
                }, function (err) {
                    console.log(err);
                });
            }

            function errorCallback(err) {
                console.log(err);
            }
            questionService.deleteQuestion(questionId).then(succeedCallback, errorCallback);
        }

    }

})();