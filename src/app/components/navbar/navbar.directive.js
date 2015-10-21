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
    function NavbarController($state, $rootScope, lodash, $mdMedia) {
      var vm = this;

      vm.mdMedia = $mdMedia;

      vm.pages = [
        {
          name: 'Home',
          state: 'default.home'
        },
        {
          name: 'About',
          state: 'default.about'
        },
        {
          name: 'Portfolio',
          state: 'default.portfolio.list'
        },
        {
          name: 'Photography',
          state: 'default.photography'
        },
        {
          name: 'Contact',
          state: 'default.contact'
        }
      ]

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

    }
  }

})();
