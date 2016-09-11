/**
 * Created by jevgenir on 11.09.2016.
 */

angular.module('application').component('carsGrid', {
  templateUrl: '/js/components/cars-grid/cars-grid.html',
  bindings: {
    cars: '<'
  }
});
