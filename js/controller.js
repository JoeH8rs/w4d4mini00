angular.module('myApp').controller('mainControl',
    function ($scope, myService) {
        $scope.name = myService.saySomething;
        $scope.hi = function() {
            alert("Hi");
        }




    });
    
