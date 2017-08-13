(function () {
    angular.module('app.services')
        .factory('grammarService', grammarService);

    grammarService.$inject = ['$http', '$q', 'appConfigs']
    function grammarService($http, $q, appConfigs) {
        var apiUrl = appConfigs.baseApiUrl.concat("grammar");

        return {
            loadGrammar: loadGrammar,
            createGrammar: createGrammar,
            getGrammarById: getGrammarById,
            deleteGrammar: deleteGrammar
        };

        function loadGrammar() {
            var deferred = $q.defer();
            $http.get(apiUrl).then(function (res) {
                deferred.resolve(res.data);
            }, function (err) {
                deferred.reject(err.data);
            });
            return deferred.promise;
        }

        function createGrammar(data) {
            var deferred = $q.defer();
            $http.post(apiUrl, data).then(function (res) {
                deferred.resolve(res.data);
            }, function (err) {
                deferred.reject(err.data);
            });
            return deferred.promise;
        };

        function getGrammarById(vocabularyId) {
            var deferred = $q.defer();
            $http.get(apiUrl + "/" + vocabularyId).then(function (res) {
                deferred.resolve(res.data);
            }, function (err) {
                deferred.reject(err.data);
            });
            return deferred.promise;
        };
        function deleteGrammar(id) {
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