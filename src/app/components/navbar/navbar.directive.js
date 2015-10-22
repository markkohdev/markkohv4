(function() {
  'use strict';

  angular
    .module('markkoh')
    .directive('navbar', navbar);

  /** @ngInject */
  function navbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($state, $rootScope, lodash) {
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

      // On initial page load, set the current state
      setCurrent($state.current);

      // Also set it on stateChange
      $rootScope.$on('$stateChangeSuccess',
        function(event, toState) {
          setCurrent(toState);
        }
      );

      function setCurrent(state) {
        lodash.forEach(vm.pages, function(page) {
          if (state.name.startsWith(page.state)){
            page.current = true;
          }
          else {
            page.current = false;
          }
        });
      }

      vm.openMenu = function($mdOpenMenu, ev) {
        $mdOpenMenu(ev);
      };

    }
  }

})();
