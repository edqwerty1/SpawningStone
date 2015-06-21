(function() {
  'use strict';

  angular
    .module('spawningStone')
    .service('spellService', spellService);

  /** @ngInject */
  function spellService($resource, $http) {
    var data = [{"Bard":false,"CastingTime":"1 action","Cleric":false,"Concentration":false,"Description":"You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage. This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).","Druid":false,"Duration":"Instantaneous","Level":0,"Material":false,"MaterialText":null,"Name":"Acid Splash","Paladin":false,"Range":"60 feet","Ranger":false,"Ritual":false,"School":"Conjuration","Somatic":true,"Sorcerer":true,"Verbal":true,"Warlock":true,"Wizard":false},{"Bard":false,"CastingTime":"1 action","Cleric":true,"Concentration":false,"Description":"Your spell bolsters your allies with toughness and resolve. Choose up to three creatures within range. Each target's hit point maximum and current hit points increase by 5 for the duration. At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, a target's hit points increase by an additional 5 for each slot level above 2nd.","Druid":false,"Duration":"8 hours","Level":2,"Material":true,"MaterialText":"a tiny strip of white cloth","Name":"Aid","Paladin":true,"Range":"30 feet","Ranger":false,"Ritual":false,"School":"Abjuration","Somatic":true,"Sorcerer":false,"Verbal":true,"Warlock":false,"Wizard":false}];

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
