(function () {
    angular.module('app.services')
        .factory('questionService', questionService);

    questionService.$inject = ['$http', '$q', 'appConfigs']
    function questionService($http, $q, appConfigs) {
        var apiUrl = appConfigs.baseApiUrl.concat("question");

        return {
            loadQuestions: loadQuestions,
            createQuestion: createQuestion,
            getQuestionById: getQuestionById,
            getRanQuestion: getRanQuestion,
            deleteQuestion: deleteQuestion
        };

        function loadQuestions() {
            var deferred = $q.defer();
            $http.get(apiUrl).then(function (res) {
                deferred.resolve(res.data);
            }, function (err) {
                deferred.reject(err.data);
            });
            return deferred.promise;
        }

        function createQuestion(data) {
            var deferred = $q.defer();
            $http.post(apiUrl, data).then(function (res) {
                deferred.resolve(res.data);
            }, function (err) {
                deferred.reject(err.data);
            });
            return deferred.promise;
        };

        function getQuestionById(questionId) {
            var deferred = $q.defer();
            $http.get(apiUrl + "/" + questionId).then(function (res) {
                deferred.resolve(res.data);
            }, function (err) {
                deferred.reject(err.data);
            });
            return deferred.promise;
        }
        function getRanQuestion(id) {
            var deferred = $q.defer();
            $http.get(apiUrl + "/getRand/" + id).then(function (res) {
                deferred.resolve(res.data);
            }, function (err) {
                deferred.reject(err.data);
            });
            return deferred.promise;
        }
        function deleteQuestion(id) {
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