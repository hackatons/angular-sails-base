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
            modalInstance.close('a');
            newModal();
          }
        }
      });
      modalInstance.result.then(function (response) {
        $scope.successMessage = response;
      }, function () {

      });
    };

    function newModal() {
      var modalInstance2 = $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: '/js/components/sk-navbar/carPriceModal.html',
        controller: function ($scope) {
          $scope.complete = function () {
            swal({
              title: 'Thank you',
              text: '',
              type: 'success',
              confirmButtonColor: '#FBBB68'
            });
            modalInstance2.close('a');
          }
        }
      });
    }

    this.submit = function(){
    }

  }
});
