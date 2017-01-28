
var myApps = angular.module('myApp', []);


myApps.controller('mainController', ['$scope', '$filter', '$http' ,function($scope, $filter, $http){
    $scope.handle = '';
    $scope.lowercasehandle = function(){
        return $filter('lowercase')($scope.handle);
    }
    
    $scope.characters = 5;
// Get the data from the database
    $http.get('/api')
        .success(function (result) {
            $scope.rules = result;
        })
        .error(function (data, status) {
            console.log(data);
        })

 // Adding data to the database
    $scope.newRule = '';
    $scope.addRule = function (result) {
        $http.post('/api', { newRule: $scope.newRule })
        .sucess(function () {
            $scope.rules = result;
            $scope.newRule = '';
        })
        .error(function (data) {
            console.log(data);
        })
    }
}])
