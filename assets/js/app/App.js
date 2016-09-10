var legislatorApp = angular.module('application', ['ngMaterial', 'ui.router' , 'ngSails', 'luegg.directives', 'pascalprecht.translate', 'skynda.search-controller']);

legislatorApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider, $translateProvider) {

  $mdThemingProvider.theme('default')
    .primaryPalette('lime')
    .accentPalette('grey')
    .warnPalette('blue-grey');

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $stateProvider
    .state('homepage', {
      url: '/',
      templateUrl: '/templates/homepage.html'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/templates/login.html'
    })
    .state('car-details', {
      url: '/car-details/:id',
      templateUrl: '/templates/carDetails.html'
    })
    .state('search', {
      url: '/search',
      templateUrl: '/templates/search.html'
    });

  $urlRouterProvider.otherwise('/');

  $translateProvider.useUrlLoader("/api/language");
  $translateProvider.preferredLanguage("es");

});
