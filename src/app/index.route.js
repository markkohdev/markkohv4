(function() {
  'use strict';

  angular
    .module('markkoh')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('default', {
        templateUrl: 'app/main/main.html'
      })
      // Nest home into default
      .state('default.home', {
        url: '/',
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      .state('default.about', {
        url: '/about',
        templateUrl: 'app/about/about.html'
      })
      .state('default.portfolio', {
        abstract: true,
        url: '/portfolio',
        templateUrl: 'app/portfolio/portfolio.html'
      })
      .state('default.portfolio.list', {
        url: '/',
        templateUrl: 'app/portfolio/list.html',
        controller: 'PortfolioListController',
        controllerAs: 'vm'
      })
      .state('default.portfolio.item', {
        url: '/portfolio/item/:id',
        templateUrl: 'app/portfolio/item.html',
        controller: 'PortfolioItemController',
        controllerAs: 'vm'
      })
      .state('default.photography', {
        url: '/photography',
        templateUrl: 'app/photography/photography.html',
        controller: 'PhotographyController',
        controllerAs: 'vm'
      })
      .state('default.contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactController',
        controllerAs: 'vm'
      })
      ;

    $urlRouterProvider.otherwise('/');
  }

})();
