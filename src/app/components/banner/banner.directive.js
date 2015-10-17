(function() {
  'use strict';

  angular
    .module('markkoh')
    .directive('banner', banner);

  /** @ngInject */
  function banner() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/banner/banner.html',
      controller: BannerController,
      transclude: true,
      scope: {
        bannerImage: '@'
      },
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function BannerController() {
      var vm = this;

      vm.style = {
        'background-image': 'url('+vm.bannerImage+')'
      };

    }
  }

})();
