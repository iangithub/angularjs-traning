var app = angular.module('myapp', []);

var sourceemp = {};
sourceemp.no = '1';
sourceemp.name = 'ian';

app.factory('empservice', [function () {
    var result = {};

    result.getdata = function () {
        return sourceemp;
    }

    result.save = function (item) {
        sourceemp.name = item.name;
    }

    return result;
}]);

app.controller('mainctrl', ['empservice', function (empservice) {
    var self = this;
    self.emp = empservice.getdata();
}]);

/*
即時連動bind，但不是我們想要的ＵＩ效果
*/
//app.controller('editctrl', ['empservice', function (empservice) {
//    var self = this;
//    self.emp = empservice.getdata();
//}]);

/*
good work
use copy + sourceobject.property = new object.property 
*/
//app.controller('editctrl', ['empservice', function (empservice) {
//    var self = this;
//    self.emp = angular.copy(empservice.getdata());
//    self.save = function () {
//        empservice.save(self.emp);
//    }
//}]);