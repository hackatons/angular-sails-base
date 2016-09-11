angular.module('application').component('checkout', {
  templateUrl: '/js/components/checkout/checkout.html',
  controller: function ($scope, $element, $attrs) {

    $scope.changeCheckoutTab = function () {
      $scope.leaseTab = !$scope.leaseTab;
    };

    /*
     * jQuery used because was most familiar
     * */
    var originalHeight = 0;

    function fixDiv() {
      var $cache = $('#scroller');
      var $width = $('#scroller').parent().parent().width();
      if ($cache && $cache.offset() && $(window).scrollTop() > $cache.offset().top) {
        $cache.css({
          'position': 'fixed',
          'top': '0',
          'width': $width
        });
      }
      if ($(window).scrollTop() < originalHeight) {
        $('#scroller').css('position', 'relative');
        $('#scroller').removeClass('top');
      }
    }

    $(window).scroll(fixDiv);
    fixDiv();

    $(document).ready(function () {

      window.setTimeout(function () {
        getCheckoutCOntainerHeight()
      }, 500);
    });
    function getCheckoutCOntainerHeight() {
      originalHeight = $("#scroller").offset().top;

    }
  }
});
