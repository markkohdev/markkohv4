(function() {
  'use strict';

  angular
    .module('markkoh')
    .controller('PortfolioItemController', PortfolioItemController);

  /** @ngInject */
  function PortfolioItemController($state) {
    var vm = this;

    console.log($state.params.id)

  }
})();
