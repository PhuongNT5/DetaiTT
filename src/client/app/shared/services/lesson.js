(function () {
    angular.module('app.services')
        .factory('lessonService', lessonService);

    lessonService.$inject = ['$http', '$q', 'appConfigs']
    function lessonService($http, $q, appConfigs) {
        var apiUrl = appConfigs.baseApiUrl.concat("lesson");

        return {
            loadLessons: loadLessons,
            createLesson: createLesson,
            getLessonById: getLessonById,
            deleteLesson: deleteLesson
        };

        function loadLessons() {
            var deferred = $q.defer();
            $http.get(apiUrl).then(function (res) {
                deferred.resolve(res.data);
            }, function (err) {
                deferred.reject(err.data);
            });
            return deferred.promise;
        }

        function createLesson(data) {
            var deferred = $q.defer();
            $http.post(apiUrl, data).then(function (res) {
                deferred.resolve(res.data);
            }, function (err) {
                deferred.reject(err.data);
            });
            return deferred.promise;
        };

        function getLessonById(lessonId) {
            var deferred = $q.defer();
            $http.get(apiUrl + "/" + lessonId).then(function (res) {
                deferred.resolve(res.data);
            }, function (err) {
                deferred.reject(err.data);
            });
            return deferred.promise;
        }
        function deleteLesson(id) {
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