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
    }
    <!--api/notification/order?recipient=ing.edwardyrc@gmail.com&brand=mazda&price=2700&modelname=sorento-->
});

angular.module('application').component('checkout', {
    templateUrl: '/js/components/checkout/checkout.html',
    controller: function ($scope, $element, $attrs, $uibModal) {

        $scope.changeCheckoutTab = function() {
            $scope.leaseTab = !$scope.leaseTab;
        };

        var carData = {
            brand: 'mazda',
            price: 2700,
            model: 'sorento'
        };

        $scope.openCheckoutModal = function(){
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: '/js/components/checkout/modal/checkoutModal.html',
                controller: 'checkoutModalController',
                controllerAs: '$ctrl',
            //    scope: $scope // <-- I added thise,
                resolve: {
                    carData: function () {
                        return carData;
                    }
                }
            });

            modalInstance.result.then(function (response) {
                $scope.successMessage = response;
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
            if ($(window).scrollTop() > $cache.offset().top) {
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
            },500);
        });
        function getCheckoutCOntainerHeight(){
            originalHeight = $("#scroller").offset().top;

        }
    }
});
