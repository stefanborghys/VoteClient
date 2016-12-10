// Define the 'IdeasFactory' factory on the 'voteMachineApp' module
voteMachineApp.factory('IdeasFactory', ['$http', '$log', function($http, $log) {
    "use strict";

    var methods = {};

    /**
     * Finds all started ideas.
     *
     * @return array of started ideas
     */
    methods.findAllStartedIdeas = function() {
        return $http({
                         method: 'GET',
                         url: 'http://127.0.0.1:8080/ideas/started/'
                     }).then(function successCallback(response) {
            // Called asynchronously, when successfully retrieved a response:
            $log.debug("Retrieved all started ideas successfully");
            var ideas = [];
            $log.log(response);
            response.data.ideas.forEach( function(idea){
                ideas[idea.id]=idea;
            });
            $log.log(ideas);
            return ideas;
            // TODO: replace this example response by the received data
            // return {
            //     "success": true,
            //     "ideas": [{
            //         "id": "584b53209e75220c6af87bfa",
            //         "title": "My first idea",
            //         "description": "My first description",
            //         "author": {
            //             "firstName": "stefan",
            //             "lastName": "borghys"
            //         },
            //         "start": "2016-12-10T02:00",
            //         "deadline": "2016-12-11T21:34:55",
            //         "creationDateTime": "2016-12-10T01:58:08.096",
            //         "options": [{
            //             "id": "582e225373775886298f8698",
            //             "label": "nee",
            //             "description": "Ik ga niet akkoord."
            //         }, {
            //             "id": "582e225373775886298f8697",
            //             "label": "ja",
            //             "description": "Ik ga akkoord."
            //         }],
            //         "comments": [{
            //             "author": {
            //                 "firstName": "stefan",
            //                 "lastName": "borghys"
            //             },
            //             "text": "My first comment",
            //             "creationDateTime": "2016-12-10T01:59:30.046"
            //         }],
            //         "scoresPerOptionId": {
            //             "582e225373775886298f8698": 1
            //         }
            //     }]
            // };
        }, function errorCallback(response) {
            // Called asynchronously, when an error occurred:
            $log.debug("Error occurred retrieving data: " + response.status + " - " + response.statusText);
            return [];
        });
    }
    /**
     * Finds all expired ideas.
     *
     * @return array of expired ideas
     */
    methods.findAllExpiredIdeas = function() {
        return $http({
            method: 'GET',
            url: 'http://127.0.0.1:8080/ideas/expired/'
        }).then(function successCallback(response) {
            // Called asynchronously, when successfully retrieved a response:
            $log.debug("Retrieved all expired ideas successfully");
            // TODO: replace this example response by the received data
            return response.data.ideas;
        }, function errorCallback(response) {
            // Called asynchronously, when an error occurred:
            $log.debug("Error occurred retrieving data: " + response.status + " - " + response.statusText);
            return [];
        });
    }

    return methods;

}]);
