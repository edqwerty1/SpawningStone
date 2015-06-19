(function() {
  'use strict';

  angular
    .module('spawningStone')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
