var app = angular.module('myapp', ['ngRoute']);

var emps = [
    { no: '1', name: 'ian', jobtype: 'RD', pay: '50000', gender: 'M' },
    { no: '2', name: 'andy', jobtype: 'RD', pay: '32500', gender: 'M' },
    { no: '3', name: 'joe', jobtype: 'RD', pay: '52000', gender: 'F' },
    { no: '4', name: 'lee', jobtype: 'PG', pay: '47000', gender: 'F' },
    { no: '5', name: 'sandy', jobtype: 'BOSS', pay: '120000', gender: 'F' },
];

app.controller('listctrl', [
            function () {
                var self = this;
                self.emps = emps;
            }
]);


app.controller('detailctrl', ['$routeParams',
            function ($routeParams) {
                var self = this;
                var no = $routeParams.no;
                for (var i = 0; i < emps.length; i++) {
                    if (emps[i].no == no) {
                        self.emp = emps[i];
                        break;
                    }
                }
            }
]);
