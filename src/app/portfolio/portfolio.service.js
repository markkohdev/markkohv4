(function() {
  'use strict';

  angular
    .module('markkoh')
    .factory('portfolioService', portfolioService);

  /* @ngInject */
  function portfolioService ($http, lodash, $q) {
    var portfolioService = {};

    var baseUrl = 'portfolio/';

    var itemList = [
      'darwin'
    ];

    portfolioService.getItem = function(itemName){
      var itemUrl = baseUrl + itemName + '.json';
      var itemPromise = $http.get(itemUrl);

      return itemPromise;
    };

    portfolioService.getItems = function() {

      // Create a promise that will resolve with all of the items
      var itemsPromise = new Promise( function(resolve) {
        // Create an empty list to wait on promises
        var promises = [];

        // Create a promise for each item
        lodash.forEach(itemList, function(item) {
          var itemPromise = portfolioService.getItem(item);
          promises.push(itemPromise);
        });

        // Once we've gotten all our items, do things with them!
        $q.all(promises).then( function(resolutions) {
          // Resolve the original promise with all our fancy items!
          resolve(lodash.pluck(resolutions, 'data'));
        });
      });

      return itemsPromise;

    };

    return portfolioService;
  }
})();
