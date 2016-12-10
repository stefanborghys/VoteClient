// Define the 'voteMachineApp' module
var voteMachineApp = angular.module('voteMachineApp', ['ui.router']);

// Define the 'voteMachineApp' configuration
voteMachineApp.config(function($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /unknown
    $urlRouterProvider.otherwise("/unknown");

    // The states
    $stateProvider
        .state('unknown', {
            url: "/unknown",
            templateUrl: "unknown.html"
        })
        .state('ideas', {
            url: "/ideas",
            templateUrl: "ideas/ideas.html",
            controller: 'IdeasController'
        })
        .state('running_ideas', {
            url: "/ideas/running",
            templateUrl: "ideas/running.html",
            controller: 'IdeasRunningController'
        })
        .state('ended_ideas', {
            url: "/ideas/ended",
            templateUrl: "ideas/ended.html",
            controller: 'IdeasEndedController'
        })
        .state('user', {
            url: "/user",
            templateUrl: "user/user.html",
            controller: 'UserController'
        })
        .state('user_profile', {
            url: "/user/profile",
            templateUrl: "user/profile.html",
            controller: 'ProfileController'
        })
        .state('user_ideas', {
            url: "/user/ideas",
            templateUrl: "user/ideas.html",
            controller: 'ProposedIdeasController'
        })
        .state('user_logout', {
            url: "/user/logout",
            templateUrl: "user/logout.html",
            controller: 'LogoutController'
        }).state('user_sign_in', {
            url: "/user/signin",
            templateUrl: "user/signin.html",
            controller: 'SignInController'
        }).state('user_register', {
            url: "/user/register",
            templateUrl: "user/register.html",
            controller: 'RegisterController'
        });
});
