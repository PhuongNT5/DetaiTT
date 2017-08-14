
(function () {
    angular.module('app.result')
        .controller('resultController', resultController);
    resultController.$inject = ['$q', '$http', '$state', 'authService', 'scoreService'];
    function resultController($q, $http, $state, authService, scoreService) {
        var vm = this;
        vm.score = {};
        vm.name = '';
        vm.role = '';
        vm.level = '';
        vm.score = 0;
        vm.phone = '';
        vm.email = '';
        vm.notTest = true;
        vm.timeTest = '';
        init();
        function init() {
            var a = authService.getToken();
            vm.name = a.firstname + a.lastname;
            vm.role = a.roles;
            vm.email = a.email;
            vm.phone = a.phone;
            scoreService.getScoreByUserId(a._id).then(function (score) {
                angular.forEach(score, function (e) {
                    e.created = moment(e.created).format('DD-MM-YYYY HH:mm')
                }, this);
                vm.score = score;
            }, function (err) {
                console.log(err);
            })
        }
    }
})();