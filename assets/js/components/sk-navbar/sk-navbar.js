/**
 * Created by jevgenir on 10.09.2016.
 */

angular.module('application').component('skNavbar', {
  templateUrl: '/js/components/sk-navbar/sk-navbar.html',
  controller: function ($scope) {
    $scope.sellCar = function () {
      swal({
          title: "Mark",
          text: "Write the mark of the car you want to sell:",
          type: "input",
          showCancelButton: true,
          closeOnConfirm: false,
          animation: "slide-from-top",
          inputPlaceholder: "Write something"
        },
        function (inputValue) {
          if (inputValue === false) return false;
          if (inputValue === "") {
            swal.showInputError("You need to write something!");
            return false
          }
          swal({
            title: "An input!",
            text: "Write a price",
            type: "input",
            showCancelButton: true,
            closeOnConfirm: false,
            animation: "slide-from-top",
            inputPlaceholder: "Write something"
          }, function (inputValue1) {
            swal("Nice!", "You just sold: " + inputValue + " for " + inputValue1 + " EUR", "success");
          });
        });
    }
  }
});
