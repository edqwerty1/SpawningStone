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
      .state('spells', {
        url: "/spells",
        templateUrl: 'app/spells/spells.html',
        controller: 'SpellsController',
        controllerAs: 'spells'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
