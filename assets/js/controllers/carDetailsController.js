/**
 * Created by jevgenir on 10.09.2016.
 */
(function () {
  var carEndpoint = '/api/car';

  angular.module('application').controller('carDetailsController', carDetailsController);

  carDetailsController.$inject = ["$scope", "$http", "$stateParams", "$timeout", "$state"];

  function carDetailsController($scope, $http, $stateParams, $timeout, $state) {
    var selectedCarId = $stateParams.id;
    $scope.similarcars = [];
    $scope.slides = [];

    init();

    /////////////////////////////

    function init() {
      getCars({id: selectedCarId}).success(function (car) {
        car.images = typeof car.images === "string" ? car.images.split(",") : [];
        $scope.car = car;

        $scope.slides.length = 0;
        for (var i = 0; i < car.images.length; i++) {
          $scope.slides.push({
            image: car.images[i],
            brand: car.brand,
            text1: "Engine: " + car.engine,
            text2: "Type: " + car.bodyType,
            text3: "Mileage: " + car.mileage
          });
        }

        /*
         THIS ACTIVATES A SLIDER ON THE TOP LOL!
         */

        $timeout(function () {
          if ($(".slider-banner-container").length > 0) {
            $(".tp-bannertimer").show();
            $('.slider-banner-container .slider-banner').show().revolution({
              delay: 10000,
              startwidth: 1140,
              startheight: 520,

              navigationArrows: "solo",

              navigationStyle: "round",
              navigationHAlign: "center",
              navigationVAlign: "bottom",
              navigationHOffset: 0,
              navigationVOffset: 20,

              soloArrowLeftHalign: "left",
              soloArrowLeftValign: "center",
              soloArrowLeftHOffset: 20,
              soloArrowLeftVOffset: 0,

              soloArrowRightHalign: "right",
              soloArrowRightValign: "center",
              soloArrowRightHOffset: 20,
              soloArrowRightVOffset: 0,

              fullWidth: "on",

              spinner: "spinner0",

              stopLoop: "off",
              stopAfterLoops: -1,
              stopAtSlide: -1,
              onHoverStop: "off",

              shuffle: "off",

              autoHeight: "off",
              forceFullWidth: "off",

              hideThumbsOnMobile: "off",
              hideNavDelayOnMobile: 1500,
              hideBulletsOnMobile: "off",
              hideArrowsOnMobile: "off",
              hideThumbsUnderResolution: 0,

              hideSliderAtLimit: 0,
              hideCaptionAtLimit: 0,
              hideAllCaptionAtLilmit: 0,
              startWithSlide: 0
            });
          }
        });

        /*
         END OF SLIDER ACTIVATION LOL!
         */
      }).error(function () {
        $state.go('error404');
      })
        .then(getSimilarCars());
    }

    function getCars(params) {
      var config = {
        params: params,
        headers: {'Accept': 'application/json'}
      };

      return $http.get(carEndpoint, config);
    }

    function getSimilarCars() {
      return getCars().success(function (cars) {
        $scope.similarcars.length = 0;
        var carsToTake = 6;
        for (var i = 0; i < cars.length && i < carsToTake; i++) {
          var car = cars[i];
          $scope.similarcars.push({
            id: car.id,
            brand: car.brand,
            img: car.images.split(',')[0],
            description: car.descriptionBrand
          });
        }
      })
    }
  }



})();

