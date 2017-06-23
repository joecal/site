'use strict'

angular.module('site', ['ui.router'])

  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $stateProvider
      .state('home', {
        url: "/",
        views: {
          "master": {
            templateUrl: "html/home.html"
          },
          "portrait@home": {
            templateUrl: "html/_portrait.html"
          },
          "links@home": {
            templateUrl: "html/_links.html"
          },
          "mail@home": {
            templateUrl: "html/_mail.html"
          },
          "sent@home": {
            templateUrl: "html/_sent.html"
          }
        }
      })
    $urlRouterProvider.otherwise('/');
  })

  .run(($rootScope) => {
    $rootScope.invalid = false;
    $rootScope.close = false;
  })
