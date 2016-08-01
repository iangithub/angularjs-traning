var app = angular.module('myapp', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider','$locationProvider',
            function ($stateProvider, $urlRouterProvider, $locationProvider) {

                $locationProvider.html5Mode(true);
                $urlRouterProvider.otherwise('/');

                $stateProvider.state('index', {
                    url: '/',
                    templateUrl: 'uirindex.html',
                }).state('index.introduction', {
                    url: '/introduction',
                    templateUrl: 'uirintroduction.html',
                }).state('index.controllers', {
                    url: '/controllers',
                    templateUrl: 'uircontrollers.html',
                }).state('index.services', {
                    url: '/services ',
                    templateUrl: 'uirservices.html',
                });
            }]);
