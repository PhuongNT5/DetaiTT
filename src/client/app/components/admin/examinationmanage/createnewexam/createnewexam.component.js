angular.module('app.admin')
    .component('createTest', {
        templateUrl: 'app/components/admin/examinationmanage/createnewexam/createnewexam.html',
        controller: createnewexamController,
        controllerAs: 'vm',
        bindings: {

        }
    });
createnewexamController.$inject = ['$q', '$http', '$state', '$scope', 'testService'];

function createnewexamController($q, $http, $state, $scope, testService) {
    var vm = this;
    vm.test = {};
    vm.createTest = createTest;
    // init();
    function createTest() {
        function successCallBack(response) {
            $state.go('admin.exammanage', { reload: true });
            testService.loadTests().then(function (test) {
                vm.test = test;
            }, function (err) {
                console.log(err);
            });
        }

        function errorCallBack(err) {
            console.log(err);
        }
        testService.createTest(vm.test).then(successCallBack, errorCallBack);

    };

}