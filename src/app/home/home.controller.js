(function() {
  'use strict';

  angular
    .module('markkoh')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController(portfolioService, $element, $scope) {
    var vm = this;

    portfolioService.getItems().then(function(items){
        vm.items = items;
        $scope.$apply();
        $element.find('.slider').slick({

        });
    });

  }
})();
