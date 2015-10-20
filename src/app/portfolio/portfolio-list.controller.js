(function() {
  'use strict';

  angular
    .module('markkoh')
    .controller('PortfolioListController', PortfolioListController);

  /** @ngInject */
  function PortfolioListController($scope, portfolioService) {
    var vm = this;

    portfolioService.getItems().then(function(items){
        vm.items = items;
        $scope.$apply();
    });

  }
})();
