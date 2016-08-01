var app = angular.module('myapp', []);

app.factory('empservice', ['$http', function ($http) {
    var result = {};
    result.allemps = function () {
        return $http.get('http://myngwebapi.azurewebsites.net/api/employee');
    }
    //controller拿到的實體物件
    return result;
}]);