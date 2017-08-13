(function () {
    angular.module('app.services')
        .factory('scoreService', scoreService);

    scoreService.$inject = ['$http', '$q', 'appConfigs']
    function scoreService($http, $q, appConfigs) {
        var apiUrl = appConfigs.baseApiUrl.concat("score");

        return {
            loadScores: loadScores,
            createScore: createScore,
            getScoreByUserId: getScoreByUserId,
            deleteScore: deleteScore
        };

        function loadScores() {
            var deferred = $q.defer();
            $http.get(apiUrl).then(function (res) {
                deferred.resolve(res.data);
            }, function (err) {
                deferred.reject(err.data);
            });
            return deferred.promise;
        }

        function createScore(data) {
            var deferred = $q.defer();
            $http.post(apiUrl, data).then(function (res) {
                deferred.resolve(res.data);
            }, function (err) {
                deferred.reject(err.data);
            });
            return deferred.promise;
        };

        function getScoreByUserId(userId) {
            var deferred = $q.defer();
            $http.get(apiUrl + "/" + userId).then(function (res) {
                deferred.resolve(res.data);
            }, function (err) {
                deferred.reject(err.data);
            });
            return deferred.promise;
        }
        function deleteScore(id) {
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