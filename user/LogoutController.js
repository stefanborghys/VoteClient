// Define the 'LogoutController' controller on the 'voteMachineApp' module
voteMachineApp.controller('LogoutController', ['$scope', '$log', '$location', function($scope, $log) {
    "use strict";

    $scope.message = "Implement this ... and use the LogoutController";

    $scope.logout = function() {
        $log.debug('logout clicked');
        Session.clear();
        $location.path("/user_sign_in");
    };
}]);