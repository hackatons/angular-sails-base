/**
 * Created by jevgenir on 10.09.2016.
 */

(function () {
  var carEndpoint = '/api/car'; // TODO: use service

  angular.module('application').controller('carDetailsController', function carDetailsController($scope, $http) {
      var selectedCarId = "85eada83-b14a-4cca-9ea3-b1217dec2778";


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

          // driver wheels - rear
          // compression ratio - 10

          // var car = {
          //   archived: data.archived,
          //   bodyType: "sedan",
          //   brand: "Accord 2.0 i-VTEC 114kW",
          //   cityFuel: "12.2",
          //   color: "silver",
          //   created: "2016-09-10T10:55:27.000Z",
          //   createdAt: null,
          //   descriptionBrand: "Accord is a series of automobiles manufactured by Honda since 1976, best known for its four-door sedan variant, which has been one of the best-selling cars in the United States since 1989. The Accord nameplate has been applied to a variety of vehicles worldwide, including coupes, wagons, hatchbacks and a crossover.",
          //   descriptionModel: null,
          //   doors: "5", //ok
          //   drive: "front-wheel drive",
          //   engine: "2.0 i-VTEC", // ok
          //   highWayFuel: "6.3",
          //   horsePower: "114",  //ok
          //   id: "85eada83-b14a-4cca-9ea3-b1217dec2778",
          //   images: "http://img6.auto24.ee/auto24/320/224/86087224.jpg,http://img3.auto24.ee/auto24/320/229/86087229.jpg,http://img4.auto24.ee/auto24/320/234/86087234.jpg".split(','),
          //   initialReg: "01/2007",
          //   isSold: null,
          //   mileage: "233,880", // ok
          //   model: "Honda",
          //   price: "4700",
          //   registrationNumber: "088MGT",
          //   seats: "5",
          //   transmission: "automatic",
          //   updatedAt: null,
          //   vin: "JHMCL76406C214572"
          // };
          if (typeof car.images === "string") {
            car.images = car.images.split(",");
          }
          else {
            car.images = [];
          }

          $scope.car = car;

          // console.log(data);
        })
      }

      function getCars(params) {
        var config = {
          params: params,
          headers: {'Accept': 'application/json'}
        };

        return $http.get(carEndpoint, config);
      }
    }
  );
})();
