/**
 * Created by jevgenir on 10.09.2016.
 */

angular.module('application').component('skNavbar', {
  templateUrl: '/js/components/sk-navbar/sk-navbar.html',
  controller: function ($scope, $uibModal) {

    $scope.sellCar = function () {
      var modalInstance = $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: '/js/components/sk-navbar/sellCarModal.html',
        controller: function ($scope) {
          $scope.complete = function () {
            swal('Thank you', 'Your order has been submitted. The offered price is 5699 euros.', 'success');
            modalInstance.close('a');
          }
        }
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
