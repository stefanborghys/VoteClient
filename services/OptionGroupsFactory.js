// Define the 'OptionGroupsFactory' factory on the 'voteMachineApp' module
voteMachineApp.factory('OptionGroupsFactory', ['$http', '$log', function($http, $log) {
    "use strict";

    var methods = {};

    /**
     * Finds all OptionGroups.
     * An OptionGroup, groups a set of commonly used options.
     * These options can be used to propose an Idea.
     *
     * This service is provided to give the end user the possibility to choose from a set of pre-defined options.
     * Instead of having to make them up, himself.
     *
     * @return array of OptionGroups
     */
    methods.findAllOptionGroups = function() {
        return $http({
            method: 'GET',
            url: 'http://127.0.0.1:8080/optionGroups/'
        }).then(function successCallback(response) {
            // Called asynchronously, when successfully retrieved a response:
            $log.debug("Retrieved all option groups successfully");
            // TODO: replace this example response by the received data
            return {
                "success": true,
                "optionGroups": [{
                    "id": "582e225373775886298f8699",
                    "name": "ja/nee",
                    "description": "Bied de standaard ja of nee opties aan.",
                    "options": [
                        { "id": "582e225373775886298f8698", "label": "nee", "description": "Ik ga niet akkoord." },
                        { "id": "582e225373775886298f8697", "label": "ja", "description": "Ik ga akkoord." }
                    ]
                }, {
                    "id": "582e22e373775886298f86a1",
                    "name": "weekdagen",
                    "description": "Bied alle dagen van de week aan.",
                    "options": [
                        { "id": "582e22e373775886298f869c", "label": "maandag", "description": "Maandag." },
                        { "id": "582e22e373775886298f869f", "label": "zaterdag", "description": "Zaterdag." },
                        { "id": "582e22e373775886298f869d", "label": "vrijdag", "description": "Vrijdag." },
                        { "id": "582e22e373775886298f869a", "label": "dinsdag", "description": "Dinsdag." },
                        { "id": "582e22e373775886298f869e", "label": "woensdag", "description": "Woensdag." },
                        { "id": "582e22e373775886298f86a0", "label": "zondag", "description": "Zondag." },
                        { "id": "582e22e373775886298f869b", "label": "donderdag", "description": "Donderdag." }
                    ]
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
