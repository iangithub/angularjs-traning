var app = angular.module('myapp', ['ngResource']);
app.factory('empservice', ['$resource', function ($resource) {
    var url = 'http://myngwebapi.azurewebsites.net/api';
    var result = $resource(url + '/employee/:id', { id: '@id' }
                , {
                    update: {
                        method: 'PUT'
                    }
                });

    //controller拿到的實體物件
    return result;
}]);