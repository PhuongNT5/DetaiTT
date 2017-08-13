(function () {
    angular.module('app.services')
        .factory('vocabularyService', vocabularyService);

    vocabularyService.$inject = ['$http', '$q', 'appConfigs']
    function vocabularyService($http, $q, appConfigs) {
        var apiUrl = appConfigs.baseApiUrl.concat("vocabulary");

        return {
            loadVocabularies: loadVocabularies,
            createVocabulary: createVocabulary,
            getVocabularyById: getVocabularyById
        };

        function loadVocabularies() {
            var deferred = $q.defer();
            $http.get(apiUrl).then(function (res) {
                deferred.resolve(res.data);
            }, function (err) {
                deferred.reject(err.data);
            });
            return deferred.promise;
        }

        function createVocabulary(data) {
            var deferred = $q.defer();
            $http.post(apiUrl, data).then(function (res) {
                deferred.resolve(res.data);
            }, function (err) {
                deferred.reject(err.data);
            });
            return deferred.promise;
        };

        function getVocabularyById(vocabularyId) {
            var deferred = $q.defer();
            $http.get(apiUrl + "/" + vocabularyId).then(function (res) {
                deferred.resolve(res.data);
            }, function (err) {
                deferred.reject(err.data);
            });
            return deferred.promise;
        }
    };
})();