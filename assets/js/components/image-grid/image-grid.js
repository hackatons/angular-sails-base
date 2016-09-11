var imageGrid = {
    // = - two-way binding
    // < - one-way binding
    // @ - string binding
    // & - callback binding
    bindings: {
        values: '<'
    },
    templateUrl: '/js/components/image-grid/image-grid.html',
    controller: function($scope) {
        var $ctrl = this;        
        $scope.$watch('$ctrl.values', function() {
            $ctrl.rows = [];
            var splitInto = 3;
            var row;
            for (var i = 0; i < $ctrl.values.length; i++) {
                if (i % splitInto === 0) {
                    row = [];
                    $ctrl.rows.push(row);
                }
                row.push($ctrl.values[i]);
            }
        });
    }
};

angular.module('skynda.image-grid', ['skynda.info-image'])
       .component('imageGrid', imageGrid);