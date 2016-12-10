// Define the 'LogoutController' controller on the 'voteMachineApp' module
voteMachineApp.controller('LogoutController', ['$scope', '$log', '$location', 'PersonFactory', function($scope, $log, $location, PersonFactory) {
    "use strict";

    $scope.message = "Implement this ... and use the LogoutController";

    $scope.logout = function() {
        $log.debug('logout clicked');
        Session.clear();
        $location.path("/user_sign_in");
    };

    $scope.isLoggedIn = false;

    $scope.logout2 = function() {
        PersonFactory.logout();
    }

    PersonFactory.subscribe($scope, function() {
        var authenticatedPerson = PersonFactory.isAuthenticated();
        if (angular.isObject(authenticatedPerson)) {
            $scope.isLoggedIn = true;
        } else {
            $scope.isLoggedIn = false;
        }
    });

}]);
