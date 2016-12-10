// Define the 'SignInController' controller on the 'voteMachineApp' module
voteMachineApp.controller('SignInController', ['$scope', '$log', 'PersonFactory', function($scope, $log, PersonFactory) {
    "use strict";

    var signInController = this;

    $scope.message = "Implement this ... and use the SignInController";

    $scope.user = {
        firstName: '',
        lastName: '',
        email: '',
        id: ''
    };

    $scope.userToAuthenticate = {
        email: '',
        password: ''
    }

    signInController.signIn = function() {
        $log.debug("Trying to authenticate.");
        PersonFactory.authenticate($scope.userToAuthenticate.email, $scope.userToAuthenticate.password).then(function(response) {
            $scope.user = response;
            $log.debug("Welcome " + $scope.user.firstName);
        });
    };

    signInController.isFormValid = function() {
        return login_user_form.$valid;
    };
}]);
