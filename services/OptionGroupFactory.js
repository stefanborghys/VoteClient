// Define the 'OptionGroupFactory' factory on the 'voteMachineApp' module
voteMachineApp.factory('OptionGroupFactory', ['$http', '$log', function($http, $log) {
    "use strict";

    var methods = {};

    /**
     * Save a new OptionGroup.
     *
     * @param optionGroup 	the new optionGroup Object to save
     * @return the save optionGroup Object
     */
    methods.save = function(optionGroup) {
        return $http({
            method: 'POST',
            url: 'http://127.0.0.1:8080/optionGroup/save/',
            // TODO: replace this example data Object by the optionGroup argument
            data: {
                "name": "Ja/Nee",
                "description": "Bied de standaard ja of nee opties aan.",
                "options": [{
                    "label": "Ja",
                    "description": "Ik ga akkoord."
                }, {
                    "label": "Nee",
                    "description": "Ik ga niet akkoord."
                }]
            }
        }).then(function successCallback(response) {
            // TODO: implement properly
            $log.debug("Registered successfully");
            return {
                "success": true,
                "id": "584b4ba69e75220c6af87bf8",
                "name": "ja/nee",
                "description": "Bied de standaard ja of nee opties aan.",
                "options": [{
                    "id": "584b4ba69e75220c6af87bf6",
                    "label": "jaa",
                    "description": "Ik ga akkoord."
                }, {
                    "id": "584b4ba69e75220c6af87bf7",
                    "label": "neee",
                    "description": "Ik ga niet akkoord."
                }],
            };
        }, function errorCallback(response) {
            // Called asynchronously, when an error occurred:
            $log.debug("Error occurred when registering a person: " + response.status + " - " + response.statusText);
            return false;
        });
    }

    return methods;

}]);
