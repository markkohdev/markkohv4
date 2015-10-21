(function() {
  'use strict';

  angular
    .module('markkoh')
    .factory('portfolioService', portfolioService);

  /* @ngInject */
  function portfolioService ($http, lodash, $q) {
    var portfolioService = {};

    var baseUrl = 'assets/portfolio/';

    var itemList = [
      'darwin',
      'livenote',
      'sigcom',
      'dragonmap'
    ];

    portfolioService.getItem = function(itemName){
      var itemUrl = baseUrl + itemName + '.json';
      var itemPromise = new Promise( function(resolve) {
        $http.get(itemUrl).then(function(response) {
          // Pull the data out of the response and just return that
          resolve(response.data);
        });
      });

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
          resolve(resolutions);
        });
      });

      return itemsPromise;

    };

    return portfolioService;
  }
})();
