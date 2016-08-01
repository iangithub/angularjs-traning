var app = angular.module('myapp', ['ui.bootstrap', 'ngResource']);

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

app.controller('listctrl', ['empservice', '$uibModal', function (empservice, $uibModal) {
    var self = this;
    self.emps = [];
    self.emps = empservice.query();

    self.open = function (itemobj) {
        $uibModal.open({
            animation:true,
            templateUrl: 'dialog11.html',
            controller: 'detailctrl as empctrl',
            resolve: {
                item: function () { return itemobj },
            }
        });
    }
}]);

app.controller('detailctrl', ['empservice','$uibModalInstance', 'item'
    , function (empservice, $uibModalInstance, item) {
        console.log(item);
        var self = this;
        self.emp = item;
    }]);
