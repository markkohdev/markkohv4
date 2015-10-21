(function() {
  'use strict';

  angular
    .module('markkoh')
    .controller('PortfolioItemController', PortfolioItemController);

  /** @ngInject */
  function PortfolioItemController($state, $timeout, $scope, portfolioService) {
    var vm = this;

    vm.loaded = false;
    vm.id = $state.params.id;

    portfolioService.getItem(vm.id).then(function(item){
        vm.item = item;
        // vm.setBannerImage(vm.item.images.banner);
        vm.loaded = true;
        $scope.$apply();
    });
  }
})();
