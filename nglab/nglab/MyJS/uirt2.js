var app = angular.module('myapp', ['ui.router', 'ngResource']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
            function ($stateProvider, $urlRouterProvider, $locationProvider) {

                $locationProvider.html5Mode(true);
                $urlRouterProvider.otherwise('/');

                $stateProvider.state('list', {
                    url: '/',
                    templateUrl: 'uirt21.html',
                    controller: 'listctrl as ctrl'
                }).state('view', {
                    url: '/view/:no',
                    templateUrl: 'uirt22.html',
                    controller: 'detailctrl as empctrl'
                }).state('edit', {
                    url: '/edit/:no',
                    templateUrl: 'uirt23.html',
                    controller: 'editctrl as empctrl'
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

app.controller('detailctrl', ['empservice', '$stateParams'
    , function (empservice, $stateParams) {
        var self = this;
        self.emp = {};
        self.emp = empservice.get({ no: $stateParams.no });
    }]);

app.controller('editctrl', ['empservice', '$stateParams', '$state'
    , function (empservice, $stateParams, $state) {
        var self = this;
        self.emp = {};
        self.emp = empservice.get({ no: $stateParams.no });
        console.log(self.emp);
        self.update = function () {
            empservice.update({ no: $stateParams.no }, self.emp, function () {
                $state.go('list');
            });
        }
    }]);