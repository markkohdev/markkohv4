(function() {
  'use strict';

  angular
    .module('markkoh')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController(portfolioService) {
    var vm = this;

    portfolioService.getItems().then(function(items){
        console.log(items);
    });

  }
})();
