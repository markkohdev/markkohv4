(function() {
  'use strict';

  angular
    .module('markkoh')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $mdThemingProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    // Theming
    // var markGrey = $mdThemingProvider.extendPalette('grey', {
    //   'default': '444444'
    // });
    // $mdThemingProvider.definePalette('markGrey', markGrey);


    // $mdThemingProvider.theme('default')
    //   .primaryPalette('markGrey')
    //   .accentPalette('blue')
    //   .warnPalette('red')
    //   .backgroundPalette('markGrey');
  }

})();
