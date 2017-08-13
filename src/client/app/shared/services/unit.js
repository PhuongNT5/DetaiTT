(function () {
    angular.module('app.services')
        .factory('unitService', unitService);

    unitService.$inject = ['$http', '$q', 'appConfigs']
    function unitService($http, $q, appConfigs) {
        var apiUrl = appConfigs.baseApiUrl.concat("unit");

        return {
            loadUnits: loadUnits,
            createUnit: createUnit,
            getUnitByUnitId: getUnitByUnitId,
            deleteUnit: deleteUnit
        };

        function loadUnits() {
            var deferred = $q.defer();
            $http.get(apiUrl).then(function (res) {
                deferred.resolve(res.data);
            }, function (err) {
                deferred.reject(err.data);
            });
            return deferred.promise;
        }

        function createUnit(data) {
            var deferred = $q.defer();
            $http.post(apiUrl, data).then(function (res) {
                deferred.resolve(res.data);
            }, function (err) {
                deferred.reject(err.data);
            });
            return deferred.promise;
        };

        function getUnitByUnitId(unitId) {
            var deferred = $q.defer();
            $http.get(apiUrl + "/" + unitId).then(function (res) {
                deferred.resolve(res.data);
            }, function (err) {
                deferred.reject(err.data);
            });
            return deferred.promise;
        }
        function deleteUnit(id) {
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