var app = angular.module('myapp', ['ngRoute', 'ngResource']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'Homework41.html',
        controller: 'listctrl as ctrl'
    }).when('/view/:no', {
        templateUrl: 'Homework42.html',
        controller: 'detailctrl as empctrl'
    }).when('/edit/:no', {
        templateUrl: 'Homework43.html',
        controller: 'editctrl as empeditctrl'
    }).otherwise({
        redirectTo: '/'
    });
}]);

app.factory('empservice', ['$resource', function ($resource) {
    var url = 'http://myngwebapi.azurewebsites.net/api';
    var result = $resource(url + '/employee/:no', { no: '@no' }
                    , {
                        update: {
                            method: 'PUT'
                        }
                    });
    return result;
}]);

app.controller('listctrl', ['empservice', function (empservice) {
    var self = this;
    self.emps = [];
    self.emps = empservice.query();
}]);

app.controller('detailctrl', ['empservice', '$routeParams'
    , function (empservice, $routeParams) {
        var self = this;
        self.emp = {};
        self.emp = empservice.get({ no: $routeParams.no });
    }]);

app.controller('editctrl', ['empservice', '$routeParams', '$window'
    , function (empservice, $routeParams, $window) {
        var self = this;
        self.emp = {};
        self.emp = empservice.get({ no: $routeParams.no });

        self.update = function () {
            empservice.update({ no: $routeParams.no }, self.emp, function () {
                $window.location.href = '#/';
            });
        }
    }]);