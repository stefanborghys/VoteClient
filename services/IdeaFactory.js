// Define the 'PersonFactory' factory on the 'angularCourseApp' module
voteMachineApp.factory('IdeaFactory', ['$http', '$log', function($http, $log) {
    "use strict";

    var methods = {};

    /**
     * Propose a new idea
     *
     * @param idea    the idea Object to propose
     * @return true when successfull, otherwise false
     */
    methods.propose = function(idea) {
        return $http({
            method: 'POST',
            url: 'http://127.0.0.1:8080/idea/propose/',
            data: idea
        }).then(function successCallback(response) {
            $log.debug("Proposed an idea successfully");
            $log.debug(JSON.stringify(response));
            return response.data;
        }, function errorCallback(response) {
            $log.debug("Error occurred when proposing an idea: " + response.status + " - " + response.statusText);
            return {};
        });
    }

    /**
     * Comment on an ACTIVE idea.
     *
     * @param id    the id of the idea which is going to be commented on
     * @param comment     comment Object
     * @return the idea Object commented on
     */
    methods.comment = function(id, comment) {

        var exampleComment = {
            "text": "My first comment",
            // TODO: author contains authentication information
            "author": {
                "id": "582e220773775886298f8694",
                "email": "stefanborghys@gmail.com",
                "password": "12345"
            }
        };


        return $http({
            method: 'PUT',
            // TODO: add the id as a path param (ex. http://127.0.0.1:8080/idea/comment/5830d9d17377589ad61f36ab)
            url: 'http://127.0.0.1:8080/idea/comment/',
            // TODO: add the comment Object as data
        }).then(function successCallback(response) {
            // TODO: implement properly
            $log.debug("Commented on an idea successfully");
            return {
                "success": true,
                "id": "584b53209e75220c6af87bfa",
                "title": "My first idea",
                "description": "My first description",
                "author": {
                    "firstName": "stefan",
                    "lastName": "borghys"
                },
                "start": "2016-12-10T02:00",
                "deadline": "2016-12-11T21:34:55",
                "creationDateTime": "2016-12-10T01:58:08.096",
                "options": [{
                    "id": "582e225373775886298f8698",
                    "label": "nee",
                    "description": "Ik ga niet akkoord."
                }, {
                    "id": "582e225373775886298f8697",
                    "label": "ja",
                    "description": "Ik ga akkoord."
                }],
                "comments": [{
                    "author": {
                        "firstName": "stefan",
                        "lastName": "borghys"
                    },
                    "text": "My first comment",
                    "creationDateTime": "2016-12-10T01:59:30.046"
                }, {
                    "author": {
                        "firstName": "stefan",
                        "lastName": "borghys"
                    },
                    "text": "My first comment",
                    "creationDateTime": "2016-12-10T02:49:41.898"
                }],
                "scoresPerOptionId": {
                    "582e225373775886298f8698": 1
                }
            };
        }, function errorCallback(response) {
            // TODO: create a proper fallback 
            $log.debug("Error occurred when updating a person: " + response.status + " - " + response.statusText);
            return {};
        });
    }


    /**
     * Vote on an ACTIVE idea.
     *
     * @param id    the id of the idea which is going to be commented on
     * @param vote     vote Object
     * @return the idea Object voted on
     */
    methods.vote = function(id, vote) {
        //
        // var exampleVote = {
        //     "optionId": "582e225373775886298f8698",
        //     // TODO: voter contains authentication information
        //     "voter": {
        //         "id": "582e220773775886298f8694",
        //         "email": "stefanborghys@gmail.com",
        //         "password": "12345"
        //     }
        // };


        return $http({
                         method: 'PUT',
                         url: 'http://127.0.0.1:8080/idea/vote/' + id,
                         data: vote
                     }).then(function successCallback(response) {
            // TODO: implement properly
            $log.debug("Voted on an idea successfully");
            return {
                "success": true,
                "id": "584b53209e75220c6af87bfa",
                "title": "My first idea",
                "description": "My first description",
                "author": {
                    "firstName": "stefan",
                    "lastName": "borghys"
                },
                "start": "2016-12-10T02:00",
                "deadline": "2016-12-11T21:34:55",
                "creationDateTime": "2016-12-10T01:58:08.096",
                "options": [{
                    "id": "582e225373775886298f8697",
                    "label": "ja",
                    "description": "Ik ga akkoord."
                }, {
                    "id": "582e225373775886298f8698",
                    "label": "nee",
                    "description": "Ik ga niet akkoord."
                }],
                "comments": [{
                    "author": {
                        "firstName": "stefan",
                        "lastName": "borghys"
                    },
                    "text": "My first comment",
                    "creationDateTime": "2016-12-10T01:59:30.046"
                }, {
                    "author": {
                        "firstName": "stefan",
                        "lastName": "borghys"
                    },
                    "text": "My first comment",
                    "creationDateTime": "2016-12-10T02:49:41.898"
                }],
                "scoresPerOptionId": {
                    "582e225373775886298f8698": 1
                }
            };
        }, function errorCallback(response) {
            // TODO: create a proper fallback 
            $log.debug("Error occurred when voting: " + response.status + " - " + response.statusText);
            return {};
        });
    };

    /**
     * Find an Idea by id.
     *
     * @return Idea Object
     */
    methods.findById = function(id) {
        return $http({
            method: 'GET',
            // TODO : add path param id (ex. http://127.0.0.1:8080/idea/584b53209e75220c6af87bfa)
            url: 'http://127.0.0.1:8080/idea/'
        }).then(function successCallback(response) {
            // Called asynchronously, when successfully retrieved a response:
            $log.debug("Retrieved idea successfully");
            // TODO: replace this example response by the received data
            return {
                "success": true,
                "id": "584b53209e75220c6af87bfa",
                "title": "My first idea",
                "description": "My first description",
                "author": {
                    "firstName": "stefan",
                    "lastName": "borghys"
                },
                "start": "2016-12-10T02:00",
                "deadline": "2016-12-11T21:34:55",
                "creationDateTime": "2016-12-10T01:58:08.096",
                "options": [{
                    "id": "582e225373775886298f8697",
                    "label": "ja",
                    "description": "Ik ga akkoord."
                }, {
                    "id": "582e225373775886298f8698",
                    "label": "nee",
                    "description": "Ik ga niet akkoord."
                }],
                "comments": [{
                    "author": {
                        "firstName": "stefan",
                        "lastName": "borghys"
                    },
                    "text": "My first comment",
                    "creationDateTime": "2016-12-10T01:59:30.046"
                }, {
                    "author": {
                        "firstName": "stefan",
                        "lastName": "borghys"
                    },
                    "text": "My first comment",
                    "creationDateTime": "2016-12-10T02:49:41.898"
                }],
                "scoresPerOptionId": {
                    "582e225373775886298f8698": 1
                }
            };
        }, function errorCallback(response) {
            // Called asynchronously, when an error occurred:
            $log.debug("Error occurred retrieving data: " + response.status + " - " + response.statusText);
            return [];
        });
    }

    return methods;

}]);
