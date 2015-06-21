(function() {
  'use strict';

  angular
    .module('spawningStone')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('spell', {
        url: "/spells",
        templateUrl: 'app/spells/spells.html',
        controller: 'SpellsController',
        controllerAs: 'spells'
      })
      .state('character', {
        url: "/character",
        templateUrl: 'app/character/character.html',
        controller: 'CharacterController',
        controllerAs: 'character'
      })
      .state('parse', {
        url: "/parse",
        templateUrl: 'app/parse/parse.html',
        controller: 'ParseController',
        controllerAs: 'parse'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
