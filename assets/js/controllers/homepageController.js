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
        for (var i = 0; i < response.data.length; i++) {
          var car = response.data[i];
          $scope.cars.found.push({
            id: car.id,
            brand: car.brand,
            img: car.images.split(',')[0],
            description: car.descriptionBrand
          });
        }
      });
    };

    $scope.showAdvancedSearch = function () {
      $state.go('search');
    };

    carService.getCars().success(function (cars) {
      $scope.carnames.length = 0;
      $scope.cars.popular.length = 0;
      $scope.cars.recent.length = 0;

      var carsToTake = 6;
      for (var i = 0; i < cars.length && i < carsToTake; i++) {
        var car = cars[i];
        $scope.carnames.push(car.brand);
        $scope.cars.popular.push({
          id: car.id,
          brand: car.brand,
          img: car.images.split(',')[0],
          description: car.descriptionBrand
        });
        $scope.cars.recent.push({
          id: car.id,
          brand: car.brand,
          img: car.images.split(',')[0],
          description: car.descriptionBrand
        });
      }
    });
  }
);
