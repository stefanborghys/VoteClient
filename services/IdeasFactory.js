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
            // TODO: replace this example response by the received data
            return {
                "success": true,
                "ideas": [{
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
                    }],
                    "scoresPerOptionId": {
                        "582e225373775886298f8698": 1
                    }
                }]
            };
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
            return {
                "success": true,
                "ideas": [{
                    "id": "58336255737758a461d93089",
                    "title": "My fourth idea",
                    "description": "My fourth description",
                    "author": {
                        "firstName": "stefan",
                        "lastName": "borghys"
                    },
                    "start": "2016-11-21T22:34:55",
                    "deadline": "2016-11-23T21:34:55",
                    "creationDateTime": "2016-11-21T22:08:37.552",
                    "options": [{
                        "id": "582e225373775886298f8698",
                        "label": "nee",
                        "description": "Ik ga niet akkoord."
                    }, {
                        "id": "",
                        "label": "onzeker",
                        "description": "Ik ben onbesloten"
                    }, {
                        "id": "582e225373775886298f8697",
                        "label": "ja",
                        "description": "Ik ga akkoord."
                    }],
                    "comments": [],
                    "scoresPerOptionId": {}
                }, {
                    "id": "5830d9d17377589ad61f36ab",
                    "title": "My third idea",
                    "description": "My third description",
                    "author": {
                        "firstName": "stefan",
                        "lastName": "borghys"
                    },
                    "start": "2016-11-19T21:34:55",
                    "deadline": "2016-11-25T21:34:55",
                    "creationDateTime": "2016-11-20T00:01:37.455",
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
                        "creationDateTime": "2016-11-20T00:12:18.647"
                    }, {
                        "author": {
                            "firstName": "stefan",
                            "lastName": "borghys"
                        },
                        "text": "My second comment",
                        "creationDateTime": "2016-11-20T00:12:52.075"
                    }],
                    "scoresPerOptionId": {
                        "582e225373775886298f8698": 1
                    }
                }, {
                    "id": "58362a90737758b91b204306",
                    "title": "My fith idea",
                    "description": "My fifth description",
                    "author": {
                        "firstName": "stefan",
                        "lastName": "borghys"
                    },
                    "start": "2016-11-24T00:50:55",
                    "deadline": "2016-11-30T21:34:55",
                    "creationDateTime": "2016-11-24T00:47:28.216",
                    "options": [{
                        "id": "582e225373775886298f8697",
                        "label": "ja",
                        "description": "Ik ga akkoord."
                    }, {
                        "id": "582e225373775886298f8698",
                        "label": "nee",
                        "description": "Ik ga niet akkoord."
                    }, {
                        "id": "58362a90737758b91b204305",
                        "label": "test",
                        "description": "Ik ga testen."
                    }],
                    "comments": [],
                    "scoresPerOptionId": {}
                }, {
                    "id": "58363896737758ba8c753f65",
                    "title": "My sixth idea",
                    "description": "My sixth description",
                    "author": {
                        "firstName": "stefan",
                        "lastName": "borghys"
                    },
                    "start": "2016-11-25T21:34:55",
                    "deadline": "2016-11-30T21:34:55",
                    "creationDateTime": "2016-11-24T01:47:18.922",
                    "options": [{
                        "id": "58363896737758ba8c753f64",
                        "label": "test2",
                        "description": "Ik ga testen."
                    }, {
                        "id": "582e225373775886298f8697",
                        "label": "ja",
                        "description": "Ik ga akkoord."
                    }, {
                        "id": "582e225373775886298f8698",
                        "label": "nee",
                        "description": "Ik ga niet akkoord."
                    }],
                    "comments": [],
                    "scoresPerOptionId": {}
                }, {
                    "id": "582e3ab67377588a5603b9cc",
                    "title": "My second idea",
                    "description": "My second description",
                    "author": {
                        "firstName": "stefan",
                        "lastName": "borghys"
                    },
                    "start": "2016-11-14T21:34:55",
                    "deadline": "2016-11-16T21:34:55",
                    "creationDateTime": "2016-11-18T00:18:14.255",
                    "options": [{
                        "id": "582e225373775886298f8698",
                        "label": "nee",
                        "description": "Ik ga niet akkoord."
                    }, {
                        "id": "582e225373775886298f8697",
                        "label": "ja",
                        "description": "Ik ga akkoord."
                    }],
                    "comments": [],
                    "scoresPerOptionId": {}
                }, {
                    "id": "582e3ab17377588a5603b9cb",
                    "title": "My second idea",
                    "description": "My second description",
                    "author": {
                        "firstName": "stefan",
                        "lastName": "borghys"
                    },
                    "start": "2016-11-14T21:34:55",
                    "deadline": "2016-11-16T21:34:55",
                    "creationDateTime": "2016-11-18T00:18:09.822",
                    "options": [{
                        "id": "582e225373775886298f8697",
                        "label": "ja",
                        "description": "Ik ga akkoord."
                    }, {
                        "id": "582e225373775886298f8698",
                        "label": "nee",
                        "description": "Ik ga niet akkoord."
                    }],
                    "comments": [],
                    "scoresPerOptionId": {}
                }]
            };
        }, function errorCallback(response) {
            // Called asynchronously, when an error occurred:
            $log.debug("Error occurred retrieving data: " + response.status + " - " + response.statusText);
            return [];
        });
    }

    return methods;

}]);
