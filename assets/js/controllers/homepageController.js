// The controller is a regular JavaScript function. It is called
// once when AngularJS runs into the ng-controller declaration.

angular.module('application').controller('homepageController', function ($scope) {

    $scope.dummyMessage = 'everything is awesome';

    var car1 = {
      id: '85eada83-b14a-4cca-9ea3-b1217dec2778',
      brand: 'Accord 2.0 i-VTEC 114kW',
      img: 'http://img6.auto24.ee/auto24/320/224/86087224.jpg',
      description: 'TODO'
    };
    var car2 = {
      id: '85eada83-b14a-4cca-9ea3-b1217dec2778',
      brand: 'Corolla Active 1.6 Valvematic 97kW',
      img: 'http://img4.auto24.ee/auto24/320/394/85033394.jpg',
      description: 'TODO'
    };
    var car3 = {
      id: '85eada83-b14a-4cca-9ea3-b1217dec2778',
      brand: 'Auris Linea Sol 2.0 D4D 93kW',
      img: 'http://img4.auto24.ee/auto24/320/639/85361639.jpg',
      description: 'TODO'
    };
    var car4 = {
      id: '85eada83-b14a-4cca-9ea3-b1217dec2778',
      brand: 'Q7 S-LINE 4.2 257kW',
      img: 'http://img6.auto24.ee/auto24/320/842/83703842.jpg',
      description: 'TODO'
    };
    var car5 = {
      id: '85eada83-b14a-4cca-9ea3-b1217dec2778',
      brand: 'A7 quattro 3.0 TFSI 220kW',
      img: 'http://img6.auto24.ee/auto24/320/120/81789120.jpg',
      description: 'TODO'
    };
    var car6 = {
      id: '85eada83-b14a-4cca-9ea3-b1217dec2778',
      brand: '520 d Touring 2.0 140kW',
      img: 'http://img7.auto24.ee/auto24/320/794/85709794.jpg',
      description: 'TODO'
    };

    var popular = [car1, car2, car3, car4, car5, car6];
    var recent = [car1, car2, car3, car4, car5, car6];
    $scope.cars = {
      popular: popular,
      recent: recent
    }
  }
);
