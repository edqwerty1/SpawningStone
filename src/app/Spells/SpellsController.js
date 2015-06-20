(function() {
  'use strict';

  angular
    .module('spawningStone')
    .controller('SpellsController', SpellsController);

  /** @ngInject */
  function SpellsController(spellService) {
    var vm = this;
    vm.spells ={};

    vm.spells =  spellService.getSpells();
  }
})();
