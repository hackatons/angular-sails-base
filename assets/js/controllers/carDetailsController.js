/**
 * Created by jevgenir on 10.09.2016.
 */
(function () {
  var carEndpoint = '/api/car'; // TODO: use service

angular.module('application').controller('carDetailsController', ["$scope", "$http", "$stateParams","$timeout",
 function ($scope, $http, $stateParams, $timeout) {
    var selectedCarId = "85eada83-b14a-4cca-9ea3-b1217dec2778";
    selectedCarId = $stateParams.id;

    $scope.labels = {
      main: 'Car name'
    };
    $scope.block1 = {
      description: "Bacon ipsum dolor amet ground round bresaola cupim frankfurter, rump tail chicken spare ribs short loin. Corned beef bresaola pork venison pancetta shoulder. Swine bacon short ribs doner kielbasa strip steak. Filet mignon salami leberkas, jerky turkey tongue pastrami doner tail. Prosciutto pork loin chuck turducken ham hock salami beef flank."
    };
    $scope.block2 = {
      description: "Bacon ipsum dolor amet ground round bresaola cupim frankfurter, rump tail chicken spare ribs short loin. Corned beef bresaola pork venison pancetta shoulder. Swine bacon short ribs doner kielbasa strip steak. Filet mignon salami leberkas, jerky turkey tongue pastrami doner tail. Prosciutto pork loin chuck turducken ham hock salami beef flank."
    };
    $scope.block3 = {
      description: 'Skynda seller Aju ...'
    };

    init();

    /////////////////////////////

    $scope.similarcars = [];

    function init() {
      $scope.slides = [];
      getCars({id: selectedCarId}).success(function (car) {
        car.images = typeof car.images === "string" ? car.images.split(",") : [];
        $scope.car = car;

        $scope.slides.length = 0;
        for (var i = 0; i < car.images.length; i++) {
          $scope.slides.push({image: car.images[i], brand: car.brand});
        }

        /*
         THIS ACTIVATES A SLIDER ON THE TOP LOL!
         */

        $timeout(function () {
          if ($(".slider-banner-container").length>0) {
            $(".tp-bannertimer").show();
            $('.slider-banner-container .slider-banner').show().revolution({
              delay:10000,
              startwidth:1140,
              startheight:520,

              navigationArrows:"solo",

              navigationStyle: "round",
              navigationHAlign:"center",
              navigationVAlign:"bottom",
              navigationHOffset:0,
              navigationVOffset:20,

              soloArrowLeftHalign:"left",
              soloArrowLeftValign:"center",
              soloArrowLeftHOffset:20,
              soloArrowLeftVOffset:0,

              soloArrowRightHalign:"right",
              soloArrowRightValign:"center",
              soloArrowRightHOffset:20,
              soloArrowRightVOffset:0,

              fullWidth:"on",

              spinner:"spinner0",

              stopLoop:"off",
              stopAfterLoops:-1,
              stopAtSlide:-1,
              onHoverStop: "off",

              shuffle:"off",

              autoHeight:"off",
              forceFullWidth:"off",

              hideThumbsOnMobile:"off",
              hideNavDelayOnMobile:1500,
              hideBulletsOnMobile:"off",
              hideArrowsOnMobile:"off",
              hideThumbsUnderResolution:0,

              hideSliderAtLimit:0,
              hideCaptionAtLimit:0,
              hideAllCaptionAtLilmit:0,
              startWithSlide:0
            });
          }
        });

        /*
         END OF SLIDER ACTIVATION LOL!
         */
      })
        .then(getCars().success(function (cars) {
          $scope.similarcars.length = 0;
          for (var i = 0; i < cars.length; i++) {
            $scope.similarcars.push({
              id: cars[i].id,
              brand: cars[i].brand,
              img: cars[i].images.split(',')[0],
              description: 'TODO'
            });
          }
        }));
    }

    function getCars(params) {
      var config = {
        params: params,
        headers: {'Accept': 'application/json'}
      };

      return $http.get(carEndpoint, config);
    }

   //controller to receive cars
   $scope.cars = ["http://img6.auto24.ee/auto24/320/120/81789120.jpg",
     "http://img3.auto24.ee/auto24/320/128/81789128.jpg", "http://img4.auto24.ee/auto24/320/136/81789136.jpg"];

    $scope.viewPhotos = function() {
      //
    };

    $scope.view360 = function() {
      //
    };
  }
]);
})();

