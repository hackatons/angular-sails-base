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
        var self = this;
        this.options = {            
            floor: self.min,
            ceil: self.max,
            translate: function(value) {
                if (!self.label || !value) return value;
                return value + " " + self.label;
            }
        };
    }
};

angular.module('skynda.range-slider', ['rzModule']).component('rangeSlider', rangeSlider);