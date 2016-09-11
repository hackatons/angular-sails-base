
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
    }
  );

})();
