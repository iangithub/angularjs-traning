var app = angular.module('myapp', []);
app.factory('empservice', [function () {
    console.log('factory');
    var result = {};
    var emps = [
            { no: '1', name: 'ian' },
            { no: '2', name: 'andy' },
            { no: '3', name: 'steve' },
    ];

    result.getdata = function () {
        return emps;
    }
    result.add = function (item) {
        emps.push(item);
    }
    //controller拿到的實體物件
    return result;
}]);