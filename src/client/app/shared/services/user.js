(function () {
    angular.module('app.services')
        .factory('userService', userService);

    userService.$inject = ['$http', '$q', 'appConfigs']
    function userService($http, $q, appConfigs) {
        var apiUrl = appConfigs.baseApiUrl.concat("users");

        return {
            loadUsers: loadUsers,
            createUser: createUser
        };

        function loadUsers() {
            var deferred = $q.defer();
            $http.get(apiUrl + '/get').then(function (res) {
                deferred.resolve(res.data);
            }, function (err) {
                deferred.reject(err.data);
            });
            return deferred.promise;
        }

        function createUser(data) {
            var deferred = $q.defer();
            $http.post(apiUrl, data).then(function (res) {
                deferred.resolve(res.data);
            }, function (err) {
                deferred.reject(err.data);
            });
            return deferred.promise;
        };

    };
})();