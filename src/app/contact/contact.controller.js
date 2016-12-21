(function() {
  'use strict';

  angular
    .module('markkoh')
    .controller('ContactController', ContactController);

  /** @ngInject */
  function ContactController() {
    var vm = this;

    vm.email = "mark@markkoh.net";
    vm.phone = "(203)733-4886";

  }
})();
