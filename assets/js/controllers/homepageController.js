// The controller is a regular JavaScript function. It is called
// once when AngularJS runs into the ng-controller declaration.

angular.module('application').controller('homepageController', function ($scope, $http) {

    $scope.dummyMessage = 'everything is awesome';

    $scope.cars = {
      popular: [],
      recent: []
    };

    getCars().success(function (cars) {
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

    function getCars(params) {
      var config = {
        params: params,
        headers: {'Accept': 'application/json'}
      };
      var carEndpoint = '/api/car'; // TODO: use service
      return $http.get(carEndpoint, config);
    }
  }
);
