(function() {
  'use strict';

  angular
    .module('spawningStone')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastr, $httpProvider, $resourceProvider, uiSelectConfig) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastr.options.timeOut = 3000;
    toastr.options.positionClass = 'toast-top-right';
    toastr.options.preventDuplicates = true;
    toastr.options.progressBar = true;

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $resourceProvider.defaults.stripTrailingSlashes = false;

    uiSelectConfig.theme = 'selectize';
  }

})();
