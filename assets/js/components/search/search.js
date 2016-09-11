var search = {
    templateUrl: '/js/components/search/search.html',
    controller: ['$http', '$stateParams', function($http, $stateParams) {
        var $ctrl = this;

        this.searchedCars = [];
        this.cars = [];

        getCars().then(function(response) {
            $ctrl.cars = response.data;
        });

        this.search = function() {
            // Filter from all cars list.
            var filteredCars = $ctrl.cars.filter(function(car) {
                
                // Filter by brand. 
                // TODO: length haxor included because we are missing some brands
                if ($ctrl.selectedBrands.length < 19 && $ctrl.selectedBrands.indexOf(car.model) === -1)
                    return false;

                // Filter by color.

                
                // Filter by price.
                if (car.price && (car.price < $ctrl.priceMin || car.price > $ctrl.priceMax))
                    return false;

                // Filter by mileage.
                var mileage = car.mileage.replace(',', '');
                if (mileage && (mileage < $ctrl.mileageMin || mileage > $ctrl.mileageMax))
                    return false;



                return true;
            });

            // Map car model into image-grid representation.
            this.searchedCars = filteredCars.map(function(car) {
                return {
                    title: car.brand,
                    description: car.descriptionBrand,
                    src: car.images.split(',')[0]
                };
            });

            console.log($ctrl);
        };

        this.brands = [
            { id: -1, name: 'All' },
            { id: 0, name: 'BMW' },
            { id: 1, name: 'Chrysler' },
            { id: 2, name: 'Citroen' },
            { id: 3, name: 'Fiat' },
            { id: 4, name: 'Ford' },
            { id: 5, name: 'Honda' },
            { id: 6, name: 'Hyundai' },
            { id: 7, name: 'Kia' },
            { id: 8, name: 'Lexus' },
            { id: 9, name: 'Mazda' },
            { id: 10, name: 'Nissan' },
            { id: 11, name: 'Opel'},
            { id: 12, name: 'Peugeot' },
            { id: 13, name: 'Renault' },
            { id: 14, name: 'Seat' },
            { id: 15, name: 'Skoda' },
            { id: 16, name: 'Subaru'},
            { id: 17, name: 'Volkswagen' },
            { id: 18, name: 'Volvo' }
        ];

        this.colors = [
            { id: -1, name: 'All', toggled: true },
            { id: 0, name: 'red', style: { 'background-color': '#EF1717' }, toggled: true, hideName: true },
            { id: 1, name: 'orange', style: { 'background-color': '#E87846' }, toggled: true, hideName: true },
            { id: 2, name: 'yellow', style: { 'background-color': '#DECC44' }, toggled: true, hideName: true },
            { id: 3, name: 'green', style: { 'background-color': '#91DD59' }, toggled: true, hideName: true },
            { id: 4, name: 'green', style: { 'background-color': '#3AC99D' }, toggled: true, hideName: true },
            { id: 5, name: 'green', style: { 'background-color': '#44DE62' }, toggled: true, hideName: true },
            { id: 6, name: 'blue', style: { 'background-color': '#15A6DB' }, toggled: true, hideName: true },
            { id: 7, name: 'white', style: { 'background-color': '#FFFFFF' }, toggled: true, hideName: true , extraClass: 'btn-inverse' },
            { id: 8, name: 'black', style: { 'background-color': '#000000' }, toggled: true, hideName: true }
        ];

        this.features = [
            { id: -1, name: 'All', toggled: true },
            { id: 0, name: 'Parking Sensors' },
            { id: 1, name: 'Bluetooth' },
            { id: 2, name: 'Sunroof' },
            { id: 3, name: 'Navigation' },
            { id: 4, name: 'leather' },
            { id: 5, name: 'Premium Lights' }
        ];

        this.transmissions = [
            { id: 0, name: 'Automatic', toggled: true },
            { id: 1, name: 'Manual', toggled: true }
        ];

        this.doors = [
            { id: -1, name: 'All', toggled: true },
            { id: 0, name: '2' },
            { id: 1, name: '3' },
            { id: 2, name: '4+' }
        ];

        this.seats = [
            { id: -1, name: 'All', toggled: true },
            { id: 0, name: '2' },
            { id: 1, name: '3' },
            { id: 2, name: '5' },
            { id: 3, name: '6+' }
        ];

        function getCars() {
            // TODO: use carService.getCars instead, but resolve module dependencies first
            var config = {
                params: {},
                headers : {'Accept' : 'application/json'}
            };
            return $http.get('/api/car', config);
        }
    }]
};

angular.module('skynda.search', ['skynda.range-slider', 'skynda.btn-group', 'skynda.image-grid'])
       .component('search', search);
