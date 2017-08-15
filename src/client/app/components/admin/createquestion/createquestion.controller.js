(function () {
    angular.module('app.createquestion')
        .controller('createquestionController', createquestionController);
    createquestionController.$inject = ['$q', '$http', '$state', 'questionService'];
    function createquestionController($q, $http, $state, questionService) {
        var vm = this;
        vm.question = {};
        vm.createQuestion = createQuestion,
            vm.validForm = validForm
        vm.isValid = true;
        function validForm() {
            isValid = false;
            if (!vm.question.question_id) {
                toastr.error('Question Id không được để trống');
                vm.isValid = false;
            }
            if (!vm.question.description) {
                toastr.error('Nội dung câu hỏi không được để trống');
                vm.isValid = false;
            }
            if (!vm.question.A || !vm.question.B) {
                if (vm.question.C || vm.question.D) {
                    toastr.error('Phải nhập đáp án A và B trước');
                    vm.isValid = false;
                }
                toastr.error('Phải có ít nhất hai đáp án');
                vm.isValid = false;
            }
            if (!vm.question.answer) {
                toastr.error('Vui lòng nhập đáp án của câu hỏi');
                vm.isValid = false;
            }
        }
        function createQuestion() {
            function succeedCallback(response) {
                $state.go('admin.questionmanage', { reload: true });
            }

            function errorCallback(err) {
                console.log(err);
            }
            validForm();
            if (vm.isValid == true) {
                questionService.createQuestion(vm.question).then(succeedCallback, errorCallback);
                questionService.loadQuestions().then(function (question) {
                    vm.questions = question;
                }, function (err) {
                    console.log(err);
                    toastr.error(err.message);
                });
            }

        }
        function deleteQuesion(questionId) {
            function successCallBack(response) {
                $state.go('admin.questionmanage', { reload: true });
            }

            function errorCallback(err) {
                console.log(err);
                toastr.error(err.message);
            }
            questionService.deleteQuesion(questionId).then(succeedCallback, errorCallback);
        }
    }

})();