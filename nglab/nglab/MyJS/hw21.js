var app = angular.module('myapp', []);
app.factory('empservice', ['$http', function ($http) {
    return {
        allemps: function () {
            return $http.get('http://myngwebapi.azurewebsites.net/api/employee');
        }
    };
}]);