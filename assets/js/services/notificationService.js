
(function () {

  angular.module('application').service('notificationService', function ($http) {
      var notificationEndpoint = '/api/notification/order';

      this.getNotificationOrder = function (recipient, brand, price, modelname){
        var config = {
          params: {
            recipient: recipient,
            brand: brand,
            price: price,
            modelname : modelname
          },
          headers : {'Accept' : 'application/json'}
        };

        return $http.get(notificationEndpoint, config);
      }
    }
  );

})();
