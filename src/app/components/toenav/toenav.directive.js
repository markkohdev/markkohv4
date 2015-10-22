(function() {
  'use strict';

  angular
    .module('markkoh')
    .directive('toenav', toenav);

  /** @ngInject */
  function toenav() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/toenav/toenav.html',
      controller: ToenavController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function ToenavController($state) {
      var vm = this;

      vm.pages = [
        {
          name: 'Home',
          state: 'default.home',
          icon: 'zmdi zmdi-home'
        },
        {
          name: 'About',
          state: 'default.about',
          icon: 'zmdi zmdi-pin-account'
        },
        {
          name: 'Portfolio',
          state: 'default.portfolio.list',
          icon: 'zmdi zmdi-view-carousel'
        },
        {
          name: 'Photography',
          state: 'default.photography',
          icon: 'zmdi zmdi-collection-image'
        },
        {
          name: 'Contact',
          state: 'default.contact',
          icon: 'zmdi zmdi-phone'
        }
      ];

    }
  }

})();
