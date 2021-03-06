// Define the 'ProposedIdeasController' controller on the 'voteMachineApp' module
voteMachineApp.controller('ProposedIdeasController', ['$scope', '$log', '$rootScope', 'IdeaFactory', 'PersonFactory', function($scope, $log, $rootScope, IdeaFactory, PersonFactory) {
    "use strict";

    $scope.startDate = new Date();
    $scope.startDate.setDate($scope.startDate.getDate() + 1);

    $scope.deadline = new Date();
    $scope.deadline.setDate($scope.startDate.getDate() + 7);

    $scope.idea = createNewIdea();

    $scope.option = {
        "id": "",
        "label": "",
        "description": ""
    };

    $scope.message = 'Create your idea here';

    $scope.addOption = function() {
        $scope.idea.options.push($scope.option);
    };

    $scope.createIdea = function() {
        IdeaFactory.propose($scope.idea).then(function(response) {
            $scope.message = 'Idea created.';
        });

        if (authenticatedPerson == null) {
            authenticatedPerson = PersonFactory.isAuthenticated();
        }

        $scope.idea = createNewIdea();
        $log.debug($scope.idea);
    };

    var authenticatedPerson = null;

    function createNewIdea() {
        return {
            "title": '',
            "description": '',
            "author": authenticatedPerson,
            // Javascript Date .toISOString(); should be used to get this String represenation:
            // Info: http://www.w3schools.com/jsref/jsref_toisostring.asp
            "start": $scope.startDate.toISOString(),
            "deadline": $scope.deadline.toISOString(),
            "options": [{
                "id": "582e225373775886298f8697",
                "label": "nee",
                "description": "Ik ga niet akkoord."
            }, {
                "id": "582e225373775886298f8698",
                "label": "ja",
                "description": "Ik ga akkoord."
            }]
        };;
    }

    PersonFactory.subscribe($scope, function() {
        var authenticatedPerson2 = PersonFactory.isAuthenticated();
        if (angular.isObject(authenticatedPerson2)) {
            authenticatedPerson = authenticatedPerson2;
        } else {
            authenticatedPerson = {};
        }
    });

}]);
