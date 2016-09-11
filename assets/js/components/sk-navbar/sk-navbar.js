/**
 * Created by jevgenir on 10.09.2016.
 */

angular.module('application').component('skNavbar', {
  templateUrl: '/js/components/sk-navbar/sk-navbar.html',
  controller: function ($scope, $uibModal) {

    $scope.sellCar = function () {
      console.log("TTEEEEE");

      var modalInstance = $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: '/js/components/sk-navbar/sellCarModal.html'
        //    scope: $scope // <-- I added thise,
       /* resolve: {
          carData: function () {
            return carData;
          }
        }*/
      });

      modalInstance.result.then(function (response) {
        $scope.successMessage = response;
      }, function () {

      });
    };

    this.submit = function(){
      //var userModel = $ctrl.user;
      console.log("HELLOOOOO");
    }

  }
});
