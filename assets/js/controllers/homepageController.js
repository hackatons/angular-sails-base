// The controller is a regular JavaScript function. It is called
// once when AngularJS runs into the ng-controller declaration.

angular.module('application').controller('homepageController', function ($scope, $state, carService) {

    $scope.dummyMessage = 'everything is awesome';

    $scope.cars = {
      popular: [],
      recent: [],
      found: []
    };

    $scope.carnames = [];

    $scope.getCarByModelOrBrand = function (val) {
      $scope.cars.found.length = 0;
      if (!val)
        return;

      carService.getCarByModelOrBrand(val).then(function (response) {
        carService.fillData(response.data, $scope.found.recent, 999);

        // for (var i = 0; i < response.data.length; i++) {
        //   var car = response.data[i];
        //   $scope.cars.found.push({
        //     id: car.id,
        //     brand: car.brand,
        //     img: car.images.split(',')[0],
        //     description: car.descriptionBrand
        //   });
        // }
      });
    };

    $scope.showAdvancedSearch = function () {
      $state.go('search');
    };

    carService.getCars().success(function (cars) {

      // collect all the car names
      $scope.carnames.length = 0;
      for (var k = 0; k < cars.length; k++) {
        $scope.carnames.push(cars[k].brand);
      }

      carService.fillData(cars, $scope.cars.recent, 6);
      carService.fillData(cars, $scope.cars.popular, 3);

      // var carsToTake = 6; // recent cars are 6
      // $scope.cars.recent.length = 0;
      // for (var i = 0; i < cars.length && i < carsToTake; i++) {
      //   var car = cars[i];
      //   $scope.cars.recent.push({
      //     id: car.id,
      //     title: car.brand,
      //     src: car.images.split(',')[1],
      //     href: '/car-details/' + car.id
      //   });
      // }


      // var carsToTake = 3; // popular cars are 3
      // $scope.cars.popular.length = 0;
      // for (var j = 0; j < cars.length && j < carsToTake; j++) {
      //   var car = cars[j];
      //   var images = car.images.split(',');
      //   $scope.cars.popular.push({
      //     id: car.id,
      //     title: car.brand,
      //     src: images[1],
      //     href: '/car-details/' + car.id
      //   });
      // }
    });
  }
);
