var rangeSlider = {
    // = - two-way binding
    // < - one-way binding
    // @ - string binding
    // & - callback binding
    bindings: {
        min: '<',
        max: '<',
        label: '<'
    },
    templateUrl: 'range-slider.template.html',
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

angular.module('component.range-slider', ['rzModule']).component('rangeSlider', rangeSlider);