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

    portfolioService.getItem = function(itemName, getDescription){
      var metaUrl = baseUrl + itemName + '.json';
      var descUrl = baseUrl + itemName + '.md';

      // Create a response to return
      var itemPromise = new Promise( function(resolve) {
        var promises = []; // We may have multiple requests to wait on

        // Get the item metadata (name, short_desc, dates, etc)
        var metaPromise = $http.get(metaUrl);
        promises.push(metaPromise);

        // If we want the lond description, make that request too
        if (getDescription) {
          var descPromise = $http.get(descUrl);
          promises.push(descPromise);
        }

        // Once we have the metadata and long description (if requested)
        // realize the data and return that kush
        $q.all(promises).then( function(resolutions) {
          // We know resolutions[0] will be the metadata since we added it first
          var itemData = resolutions[0].data;

          if (getDescription) {
            itemData.long_desc = resolutions[1].data;
          }

          // Pull the data out of the response and just return that
          resolve(itemData);
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
          var itemPromise = portfolioService.getItem(item, false);
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
