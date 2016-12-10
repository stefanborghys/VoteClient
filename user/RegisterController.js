// Define the 'RegisterController' controller on the 'voteMachineApp' module
voteMachineApp.controller('RegisterController', ['$scope', '$log', 'PersonFactory', function($scope, $log, PersonFactory) {
    "use strict";

    $scope.registerResponse = false;
    $scope.person = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    };

    $scope.registerNewUser = function(person) {
        PersonFactory.register(person).then(function(response) {
            $scope.registerResponse = response;
            $log.debug("Register response: " + response);
        });
    }

    $scope.getRegisterResponse = function() {
        return $scope.registerResponse;
    }

}]);
