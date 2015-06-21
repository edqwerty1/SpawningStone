(function() {
  'use strict';

  angular
    .module('spawningStone')
    .controller('ParseController', ParseController);

  /** @ngInject */
  function ParseController($resource) {
    var vm = this;

    var res = $resource('assets/spells.json');

    var spellsRaw = {};

    res.get().$promise.then(function(spells){
      spellsRaw = spells;
      vm.parseSpells();
    });

     var correctFormat = [{"Bard":false,
      "CastingTime":"1 action",
      "Cleric":false,
      "Concentration":false,
      "Description":"Yo",
      "Druid":false,
      "Duration":"Instantaneous",
      "Level":0,
      "Material":false,
      "MaterialText":null,
      "Name":"Acid Splash",
      "Paladin":false,
      "Range":"60 feet",
      "Ranger":false,
      "Ritual":false,
      "School":"Conjuration",
      "Somatic":true,
      "Sorcerer":true,
      "Verbal":true,
      "Warlock":true,
      "Wizard":false}];

   vm.parseSpells = function()
   {
     var log = [];
     angular.forEach(spellsRaw, function(value, key) {
       this.push(
         {"CastingTime": value.casting_time,
         "Concentration": value.concentration,
         "Description": '"#TODO" ,' ,
         "Duration": value.duration ,
         "Level": value.level ,
         "Material": (value.components || '').includes('M') ,
         "MaterialText": '"#TODO",' ,
         "Name": value.name ,
         "Range":value.range ,
         "Ritual": value.ritual,
         "School": value.school ,
         "Somatic": (value.components || '').includes('S') ,
         "Verbal":  (value.components || '').includes('V'),
         "Classes": []}

       );
       angular.forEach(value.class, function(value, key){
         this.push(key);
       },this[this.length-1].Classes );
     }, log);

     vm.spells = log;
    console.log(log);
   };

  }
})();
