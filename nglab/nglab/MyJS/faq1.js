var app = angular.module('myapp', []);

var sourceemp = {};
sourceemp.no = '1';
sourceemp.name = 'ian';

app.controller('mainctrl', [function () {
    var self = this;
    self.emp = sourceemp;
}]);

//app.controller('editctrl', [function () {
//    var self = this;
//    self.emp = sourceemp;
//    console.log(self.emp === sourceemp); //true
//}]);

/*
use copy
*/
//app.controller('editctrl', [function () {
//    var self = this;
//    self.emp = angular.copy(sourceemp);
//    console.log(self.emp === sourceemp); //false
//}]);

/*
extend
*/
//app.controller('editctrl', [function () {
//    var self = this;
//    self.emp = angular.extend(sourceemp);
//    console.log(self.emp === sourceemp); //true
//}]);

/*
use copy + sourceobject = new object
*/
//app.controller('editctrl', [function () {
//    var self = this;
//    self.emp = angular.copy(sourceemp);
//    console.log(self.emp === sourceemp); //false
//    self.save = function () {
//        sourceemp = self.emp;
//        console.log(self.emp === sourceemp); //true
//    }
//}]);

/*
good work
use copy + sourceobject.property = new object.property 
*/
app.controller('editctrl', [function () {
    var self = this;
    self.emp = angular.copy(sourceemp);
    console.log(self.emp === sourceemp); //false
    self.save = function () {
        sourceemp.name = self.emp.name;
        console.log(self.emp === sourceemp); //false
    }
}]);

