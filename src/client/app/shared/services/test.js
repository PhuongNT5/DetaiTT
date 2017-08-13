(function () {
    angular.module('app.services')
        .factory('testService', testService);

    testService.$inject = ['$http', '$q', 'appConfigs']
    function testService($http, $q, appConfigs) {
        var apiUrl = appConfigs.baseApiUrl.concat("test");

        return {
            loadTests: loadTests,
            createTest: createTest,
            getTestById: getTestById,
            getTestByLevel: getTestByLevel,
            deleteTest: deleteTest
        };

        function loadTests() {
            var deferred = $q.defer();
            $http.get(apiUrl).then(function (res) {
                deferred.resolve(res.data);
            }, function (err) {
                deferred.reject(err.data);
            });
            return deferred.promise;
        }

        function createTest(data) {
            var deferred = $q.defer();
            $http.post(apiUrl, data).then(function (res) {
                deferred.resolve(res.data);
            }, function (err) {
                deferred.reject(err.data);
            });
            return deferred.promise;
        };

        function getTestById(testId) {
            var deferred = $q.defer();
            $http.get(apiUrl + "/" + testId).then(function (res) {
                deferred.resolve(res.data);
            }, function (err) {
                deferred.reject(err.data);
            });
            return deferred.promise;
        }
        function getTestByLevel(level) {
            var deferred = $q.defer();
            $http.get(apiUrl + "/Lv" + "/" + level).then(function (res) {
                deferred.resolve(res.data);
            }, function (err) {
                deferred.reject(err.data);
            });
            return deferred.promise;
        }
        function deleteTest(id) {
            var deferred = $q.defer();
            $http.delete(apiUrl + '/' + id).then(function (res) {
                deferred.resolve(res.data);
            }, function (err) {
                deferred.reject(err.data);
            });
            return deferred.promise;
        };
    };
})();