var rangeSlider = {
    // = - two-way binding
    // < - one-way binding
    // @ - string binding
    // & - callback binding
    bindings: {
        min: '<',
        max: '<',
        label: '<',
        modelMin: '=',
        modelMax: '='
    },
    templateUrl: '/js/components/range-slider/range-slider.html',
    controller: function() {
        var $ctrl = this;
        this.options = {            
            floor: $ctrl.min,
            ceil: $ctrl.max,
            translate: function(value) {
                if (!$ctrl.label || !value) return value;
                return value + " " + $ctrl.label;
            }
        };
        if (!$ctrl.modelMin) $ctrl.modelMin = $ctrl.min;
        if (!$ctrl.modelMax) $ctrl.modelMax = $ctrl.max;
    }
};

angular.module('skynda.range-slider', ['rzModule']).component('rangeSlider', rangeSlider);