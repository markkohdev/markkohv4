(function() {
  'use strict';

  angular
    .module('markkoh')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
