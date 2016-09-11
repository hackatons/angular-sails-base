/**
 * Created by jevgenir on 10.09.2016.
 */

function fpblockController($scope, $element, $attrs) {}

angular.module("application").component("fp-block", {
  transclude: true,
  templateUrl: '/js/components/fp-block/fp-block.html',
  controller: fpblockController,
  bindings: {
    header: '<'
  }
});
