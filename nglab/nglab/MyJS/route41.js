var app = angular.module('myapp', ['ngRoute']);

app.controller('mainctrl', [
            function () {
                var self = this;
                self.name = 'Ian';
            }
]);

