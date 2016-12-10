// Define the 'IdeasEndedController' controller on the 'voteMachineApp' module
voteMachineApp.controller('IdeasEndedController', ['$scope', '$log', 'IdeasFactory', function($scope, $log, IdeasFactory) {
    "use strict";

    $scope.message = "Implement this ... and use the IdeasEndedController";

    $scope.endedIdeas = [];

    $scope.idea = {
        "title": "",
        "description": "",
        "author": {
            "id": "",
            "email": "",
            "password": ""
        },
        "start": "",
        "deadline": "",
        "options": [],
        "comments": []
    };

    $scope.option = {
        "id": "",
        "label": "",
        "description": ""
    };

    $scope.comment = {
        "author": {
            "firstName": "",
            "lastName": ""
        },
        "text": "",
        "creationDateTime": ""
    };

    var findAllExpiredIdeas = function() {
        IdeasFactory.findAllExpiredIdeas().then(function(response) {
            $scope.endedIdeas = response;
        })
    }

    findAllExpiredIdeas();

    $scope.tableHeaders = [{
        name: 'Title',
        property: 'title',
        reverse: false,
        selected: true
    }, {
        name: 'description',
        property: 'description',
        reverse: false,
        selected: false
    }, {
        name: 'Author',
        property: 'author',
        reverse: false,
        selected: false
    }, {
        name: 'Start',
        property: 'start',
        reverse: false,
        selected: false
    }, {
        name: 'Deadline',
        property: 'deadline',
        reverse: false,
        selected: false
    }, {
        name: 'Options',
        property: 'options',
        reverse: false,
        selected: false
    }, {
        name: 'Comments',
        property: 'comments',
        reverse: false,
        selected: false
    }];

    $scope.orderByPredicates = function() {
        var predicates = [];
        // 1. loop over the array of tableHeaders
        for (var i = 0; i < $scope.tableHeaders.length; i++) {
            // 2. check if selected
            if ($scope.tableHeaders[i].selected) {
                // 3. determine the order
                var reverseSign = ($scope.tableHeaders[i].reverse ? '-' : '');
                predicates.push(reverseSign + $scope.tableHeaders[i].property);
            }
        }
        console.log("Order by: " + predicates);
        return predicates;
    }

}]);
