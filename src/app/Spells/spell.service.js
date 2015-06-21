(function() {
  'use strict';

  angular
    .module('spawningStone')
    .service('spellService', spellService);

  /** @ngInject */
  function spellService($resource, $http) {
    this.getSpells = getSpells;
    this.getLocalSpells = getLocalSpells;

    function getSpells() {
      $http.defaults.useXDomain = true;
      var resource = $resource('http://spawningstone.cloudapp.net/spells.svc/');
      return resource.query();
    }
    function getLocalSpells() {
      $http.defaults.useXDomain = true;
      var resource = $resource('assets/actualSpells.json');
      return resource.query();
    }
  }

})();
