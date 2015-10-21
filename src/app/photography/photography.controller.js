(function() {
  'use strict';

  angular
    .module('markkoh')
    .controller('PhotographyController', PhotographyController);

  /** @ngInject */
  function PhotographyController($element) {
    var vm = this;

    $element.find('#flickrGallery').nanoGallery({
        kind:'flickr',
        userID:'57217027@N05',
        albumSorting: 'random'
    });

  }
})();
