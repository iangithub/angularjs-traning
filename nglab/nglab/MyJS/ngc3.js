/// <reference path="D:\MY.NET\TempProject\nglab\nglab\Scripts/angular.min.js" />

var app = angular.module("myapp", []);

app.controller("mainctrl", [function () {
    var self = this;
    self.emps = [
        { no: '001', name: 'Ian', title: 'RD' },
        { no: '002', name: 'Andy', title: 'PM' },
        { no: '003', name: 'Cody', title: 'PG' },
        { no: '004', name: 'Chen', title: 'PG' },
        { no: '005', name: 'Lee', title: 'PG' },
    ];
}]);

app.component("empUi", {
    templateUrl: 'ngcomponent31.html',
    controllerAs: 'empctrl',
    controller: function empctrl() {
        var self = this;
        self.callPhone = function (emp) {
            alert(emp.name + ' Phone........');
        }
    },
    bindings: {
        empData: '='
    }
});



