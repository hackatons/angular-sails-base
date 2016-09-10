var search = {
    templateUrl: 'search.template.html',
    controller: function($http) {
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
            { id: 11, name: 'Opel', toggled: true },
            { id: 12, name: 'Peugeot' },
            { id: 13, name: 'Renault' },
            { id: 14, name: 'Seat' },
            { id: 15, name: 'Skoda' },
            { id: 16, name: 'Subaru', toggled: true },
            { id: 17, name: 'Volkswagen' },
            { id: 18, name: 'Volvo' }
        ];

        this.colors = [
            { id: -1, name: 'All', toggled: true },
            { id: 0, style: { 'background-color': '#EF1717' } },
            { id: 1, style: { 'background-color': '#E87846' } },
            { id: 2, style: { 'background-color': '#DECC44' } },
            { id: 3, style: { 'background-color': '#91DD59' } },
            { id: 4, style: { 'background-color': '#3AC99D' } },
            { id: 5, style: { 'background-color': '#44DE62' } },
            { id: 6, style: { 'background-color': '#15A6DB' } },
            { id: 7, style: { 'background-color': '#FFFFFF' } },
            { id: 8, style: { 'background-color': '#000000' } }
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
            { id: 1, name: 'Manual' }
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
    }
};

angular.module('component.search', ['component.range-slider', 'component.btn-group'])
       .component('search', search);