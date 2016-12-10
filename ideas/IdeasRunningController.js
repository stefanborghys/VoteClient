// Define the 'IdeasRunningController' controller on the 'voteMachineApp' module
voteMachineApp.controller('IdeasRunningController', ['$scope', '$log', '$rootScope', 'IdeaFactory', 'IdeasFactory', function ($scope, $log, $rootScope, ideaFactory, ideasFactory) {
    "use strict";

    $scope.vote = function (id, optionId) {
        var user = $rootScope.user;
        ideaFactory.vote(id, {
            optionId: optionId,
            voter: {
                id: user.id,
                email: user.email,
                password: user.password
            }
        }).then(function (idea) {
            idea.opened = $scope.ideas[idea.id];
            $scope.ideas[idea.id] = idea;
        })
    };

    ideasFactory.findAllStartedIdeas().then(function (ideas) {
        $log.log(ideas);
        $scope.ideas = ideas;
        for(var id in ideas){
            ideas[id].opened = false;
        }
    });



}]);
