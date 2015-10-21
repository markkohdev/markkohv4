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
        bannerImage: '@',
        setBannerImage: '='
      },
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function BannerController($scope) {
      var vm = this;

      vm.setBannerImage = function(image) {
        vm.style = {
          'background-image': 'url('+image+')'
        };
        // $scope.$apply();
      }

      if (vm.bannerImage != null){
        vm.setBannerImage(vm.bannerImage);
      }



    }
  }

})();
