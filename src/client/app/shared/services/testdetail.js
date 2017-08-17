(function () {
    angular.module('app.services')
        .factory('testdetailService', testdetailService);

    testdetailService.$inject = ['$http', '$q', 'appConfigs']
    function testdetailService($http, $q, appConfigs) {
        var apiUrl = appConfigs.baseApiUrl.concat("testdetail");

        return {
            loadTestDetails: loadTestDetails,
            createTestDetail: createTestDetail,
            getTestDetailById: getTestDetailById,
            deleteTestDeatil: deleteTestDeatil,
            getTestDetailInfoById: getTestDetailInfoById,
            getTestDetailByTestId: getTestDetailByTestId
        };

        function loadTestDetails() {
            var deferred = $q.defer();
            $http.get(apiUrl).then(function (res) {
                deferred.resolve(res.data);
            }, function (err) {
                deferred.reject(err.data);
            });
            return deferred.promise;
        }

        function createTestDetail(data) {
            var deferred = $q.defer();
            $http.post(apiUrl, data).then(function (res) {
                deferred.resolve(res.data);
            }, function (err) {
                deferred.reject(err.data);
            });
            return deferred.promise;
        };

        function getTestDetailById(testId) {
            var deferred = $q.defer();
            $http.get(apiUrl + "/" + testId).then(function (res) {
                deferred.resolve(res.data);
            }, function (err) {
                deferred.reject(err.data);
            });
            return deferred.promise;
        }
        function getTestDetailInfoById(testId) {
            var deferred = $q.defer();
            $http.get(apiUrl + "/getinfo/" + testId).then(function (res) {
                deferred.resolve(res.data);
            }, function (err) {
                deferred.reject(err.data);
            });
            return deferred.promise;
        }
        function getTestDetailByTestId(testId) {
            var deferred = $q.defer();
            $http.get(apiUrl + "/getbyTest/" + testId).then(function (res) {
                deferred.resolve(res.data);
            }, function (err) {
                deferred.reject(err.data);
            });
            return deferred.promise;
        }

        function deleteTestDeatil(id) {
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