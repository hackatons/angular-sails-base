/**
 * Created by jevgenir on 10.09.2016.
 */
(function () {
  var carEndpoint = '/api/car'; // TODO: use service

angular.module('application').controller('carDetailsController', ["$scope", "$http", "$stateParams","$state",
 function ($scope, $http, $stateParams, $state) {
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

    function init() {
      getCars({id: selectedCarId}).success(function (car) {
        car.images = typeof car.images === "string" ? car.images.split(",") : [];
        $scope.car = car;
      }).error(function () {
        $state.go('error404');
      });
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

