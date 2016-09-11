
(function () {

  angular.module('application').service('carService', function ($http) {
      var carEndpoint = '/api/car';

      this.getCars = function (params){
        var config = {
          params: params,
          headers : {'Accept' : 'application/json'}
        };

        return $http.get(carEndpoint, config);
      };

      this.getCarByModelOrBrand = function (searchTerm){
        var config = {
          params: {
            term : searchTerm
          },
          headers : {'Accept' : 'application/json'}
        };

        return $http.get(carEndpoint+'/by-brand-or-model', config);
      }

      this.fillData = function (source, dest, take) {
        dest.length = 0;
        for (var j = 0; j < source.length && j < take; j++) {
          var car = source[j];
          var images = car.images.split(',');
          dest.push({
            id: car.id,
            title: car.brand,
            src: images[1],
            href: '/car-details/' + car.id
          });
        }
      }
    }
  );

})();
