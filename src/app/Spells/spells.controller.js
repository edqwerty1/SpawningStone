(function() {
  'use strict';

  angular
    .module('spawningStone')
    .controller('SpellsController', SpellsController);

  /** @ngInject */
  function SpellsController(spellService, $filter, $cookieStore, toastr) {
    var vm = this;
    vm.spells =[];

    vm.savedSpells = $cookieStore.get('savedSpells') || [];
 //   vm.spells =  spellService.getSpells();
      vm.spells =  spellService.getLocalSpells();


    vm.spellStore = vm.spells;

    vm.isSaved = function(spellName){
      return vm.savedSpells.indexOf(spellName) !== -1;
    };

    vm.saveSpell = function(spellName){
      var currentSpellIndex = vm.savedSpells.indexOf(spellName);
      if (currentSpellIndex === -1){
        vm.savedSpells.push(spellName);
      }else {
        vm.savedSpells = $filter('filter')(vm.savedSpells, function(item) {
          return !(item == spellName);
        })
      }
    };

    vm.saveSpells = function(){
      $cookieStore.put('savedSpells',  vm.savedSpells);
      toastr.info("Spells Saved !")
    };

    vm.filterSpells = function(){
      vm.spells = $filter('filter')(vm.spells, function(item) {
        return !(vm.savedSpells.indexOf(item.Name) ===-1);
      })
    };

    vm.showAll = function(){
      vm.spells = vm.spellStore;
    }
  }
})();
