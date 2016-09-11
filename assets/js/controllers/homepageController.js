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
        carService.fillData(response.data, $scope.cars.found, 999);
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
    });
  }
);
