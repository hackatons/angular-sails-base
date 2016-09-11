angular.module('application').controller('checkoutModalController', function ($uibModalInstance, notificationService, carData) {
    var $ctrl = this;
    $ctrl.header = 'One More Step';
    $ctrl.user = {
        carBrand: carData.brand,
        carPrice: carData.price,
        carModel: carData.model
    };

    $ctrl.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    $ctrl.submit = function(){
        var userModel = $ctrl.user;
        var response = notificationService.getNotificationOrder(userModel.email, userModel.carBrand, userModel.carPrice, userModel.carModel);
        $uibModalInstance.close("success");
    };
});

angular.module('application').component('checkout', {
    templateUrl: '/js/components/checkout/checkout.html',
    controller: function ($scope, $element, $attrs, $uibModal) {

        $scope.changeCheckoutTab = function() {
            $scope.leaseTab = !$scope.leaseTab;
        };

        $scope.carData = {
            brand: this.car.brand,
            price: this.car.price,
            model: this.car.model
        };

        $scope.openCheckoutModal = function(){
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: '/js/components/checkout/modal/checkoutModal.html',
                controller: 'checkoutModalController',
                controllerAs: '$ctrl',
                resolve: {
                    carData: function () {
                        return $scope.carData;
                    }
                }
            });

            modalInstance.result.then(function (response) {
                $scope.successMessage = response;

                if($scope.successMessage == "success"){
                    swal("Good job!", "You have bought an excellent car!", "success");
                }

            }, function () {

            });

        }

        /*
        * jQuery used because was most familiar
        * */
        var originalHeight = 0;
        function fixDiv() {
            var $cache = $('#scroller');
            var $width = $('#scroller').parent().parent().width();
            if ($cache && $cache.offset() && $(window).scrollTop() > $cache.offset().top) {
                $cache.css({
                    'position': 'fixed',
                    'top': '0',
                    'width': $width
                });
            }
            if ($(window).scrollTop() < originalHeight) {
                $('#scroller').css('position', 'relative');
                $('#scroller').removeClass('top');
            }
        }
        $(window).scroll(fixDiv);
        fixDiv();

        $(document).ready(function () {
            window.setTimeout(function(){
              getCheckoutCOntainerHeight()
            },1500);
        });
        function getCheckoutCOntainerHeight(){
            originalHeight = $("#scroller").offset() ? $("#scroller").offset().top : 0;

        }
    },
    bindings: {
        car: "<"
    }
});
