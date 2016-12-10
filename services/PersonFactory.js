// Define the 'PersonFactory' factory on the 'angularCourseApp' module
voteMachineApp.factory('PersonFactory', ['$http', '$log', '$rootScope', function($http, $log, $rootScope) {
    "use strict";

    var methods = {};

    /**
     * Registers a new person / user.
     *
     * @param person    the person Object to register
     * @return true when successfull, otherwise false
     */
    methods.register = function(person) {
        return $http({
            method: 'POST',
            url: 'http://127.0.0.1:8080/person/register/',
            // TODO: replace this example data Object by the person argument
            data: person
        }).then(function successCallback(response) {
            // TODO: this POST request only return the 200 status code to indicate the registration was successfull
            $log.debug("Registered successfully");
            return true;
        }, function errorCallback(response) {
            // Called asynchronously, when an error occurred:
            $log.debug("Error occurred when registering a person: " + response.status + " - " + response.statusText);
            return false;
        });
    }

    var authenticatedPerson = null;

    methods.isAuthenticated = function() {
        if (authenticatedPerson == null) {
            return false;
        }
        return authenticatedPerson;
    }

    methods.logout = function() {
        authenticatedPerson = null;
        notify();
    }

    methods.subscribe = function(scope, callback) {
        var handler = $rootScope.$on('notifying-service-event', callback);
        scope.$on('$destroy', handler);
    };

    /**
     * Authenticates a person / user by email and password.
     *
     * @param email     the user's email address
     * @param password  the users's password
     * @return person Object
     */
    methods.authenticate = function(email, password) {
        return $http({
            method: 'POST',
            url: 'http://127.0.0.1:8080/person/authenticate/',
            // TODO: replace this example data Object by the arguments
            data: {
                "email": email,
                "password": password
            }
        }).then(function successCallback(response) {
            // TODO: implement properly
            $log.debug("Authenticated successfully");
            $log.debug(JSON.stringify(response));
            return {
                "success": response.data.success,
                "id": response.data.status,
                "firstName": response.data.firstName,
                "lastName": response.data.lastName,
                "email": response.data.email
            };
        }, function errorCallback(response) {
            // TODO: create a proper fallback when authentication fails
            $log.debug("Error occurred when authenticating a person: " + response.status + " - " + response.statusText);
            return {};
        });
    }

    /**
     * Updates a person's data.
     *
     * @param id    the id of the person which needs to be updated
     * @param updatedIdentifiablePerson     Object which contains all data to process an update
     * @return the updated person Object
     */
    methods.update = function(id, updatedIdentifiablePerson) {
        return $http({
            method: 'PUT',
            // TODO: add the id as a path param (ex. http://127.0.0.1:8080/person/update/582e220773775886298f8694)
            url: 'http://127.0.0.1:8080/person/update/',
            // TODO: replace this example data Object by the updatedIdentifiablePerson argument
            data: {
                // TODO: the identifier contains data retrieved from the authentication 
                "identifier": {
                    "id": "582e220773775886298f8694",
                    "email": "eddy@wally.be",
                    "password": "12345"
                },
                // TODO: add all fields and values (even if they didn't change)
                "firstName": "eddy",
                "lastName": "wallie",
                "email": "wally@eddy.be",
                "password": "54321"
            }
        }).then(function successCallback(response) {
            authenticatedPerson = response.data;
            notify();
            // TODO: implement properly
            $log.debug("Updated a person successfully");
            return {
                "success": true,
                "id": "582e220773775886298f8694",
                "firstName": "eddie",
                "lastName": "wally",
                "email": "eddy@wally.be"
            };
        }, function errorCallback(response) {
            // TODO: create a proper fallback 
            $log.debug("Error occurred when updating a person: " + response.status + " - " + response.statusText);
            return {};
        });
    }

    return methods;

}]);
