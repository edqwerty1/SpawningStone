(function() {
  'use strict';

  angular
    .module('spawningStone')
    .controller('SpellsController', SpellsController);

  /** @ngInject */
  function SpellsController(spellService) {
    var vm = this;
    vm.spells ={};

      spellService.getSpells2().then(function(spells){
        console.log(spells);
        vm.spells2 = spells;
      }, function(err, status){
        console.log(err);
        console.log(status);
      });

    spellService.getSpells().then(function(spells){
      console.log(spells);
      vm.spells = spells;
    }, function(err, status){
      console.log(err);
      console.log(status);
    });

    spellService.getSpells3().then(function(spells){
      console.log(spells + "3");
      vm.spells3 = spells;
    }, function(err, status){
      console.log(err);
      console.log(status);
    });

    vm.spells = spellService.getSpells4();

  }
})();
