// Define the 'RegisterController' controller on the 'voteMachineApp' module
voteMachineApp.controller('RegisterController', ['$scope', '$log', "PersonFactory", function($scope, $log, PersonFactory) {
    "use strict";

    $scope.message = "";

    $scope.emptyUser = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    };

    $scope.register = function(user) {
        PersonFactory.register(user).then(
            function(response) {
                $scope.message = "Registration succesfull";
                $log.debug($scope.user);
            });
    };

    var reset = function() {
        $scope.user = angular.copy($scope.emptyUser);
    };

    reset();
}]);
