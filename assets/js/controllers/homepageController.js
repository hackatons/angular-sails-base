// The controller is a regular JavaScript function. It is called
// once when AngularJS runs into the ng-controller declaration.

angular.module('application').controller('homepageController', function ($scope, $state, carService) {

    $scope.dummyMessage = 'everything is awesome';

    $scope.cars = {
      popular: [],
      recent: []
    };

    $scope.getCarByModelOrBrand = function(val) {
       carService.getCarByModelOrBrand(val).then(function(data) {
         console.log(data);
         $state.go('search', data)
       });
    };

    carService.getCars().success(function (cars) {
      $scope.cars.popular.length = 0;
      $scope.cars.recent.length = 0;
      for (var i = 0; i < cars.length; i++) {
        $scope.cars.popular.push({
          id: cars[i].id,
          brand: cars[i].brand,
          img: cars[i].images.split(',')[0],
          description: 'TODO'
        });
        $scope.cars.recent.push({
          id: cars[i].id,
          brand: cars[i].brand,
          img: cars[i].images.split(',')[0],
          description: 'TODO'
        });
      }
    });
  }
);
