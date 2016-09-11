var btnGroup = {
    // = - two-way binding
    // < - one-way binding
    // @ - string binding
    // & - callback binding
    bindings: {
        options: '<',
        shape: '<',
        model: '='
    },
    templateUrl: '/js/components/btn-group/btn-group.html',
    controller: function() {
        var $ctrl = this;
        this.toggle = function(option) {
            option.toggled = !option.toggled;

            if (option.id === -1) {
                if (option.toggled) {
                    selectAll();
                } else {
                    deselectAll();
                }
            } 

            setFiltersModel();
        };

        function selectAll() {
            for (var i = 0; i < $ctrl.options.length; i++) {
                var option = $ctrl.options[i];
                option.toggled = true;
            }
        }

        function deselectAll() {
            for (var i = 0; i < $ctrl.options.length; i++) {
                var option = $ctrl.options[i];
                option.toggled = false;
            }
        }

        function setFiltersModel() {
            $ctrl.model = $ctrl.options.filter(function(option) {
                return option.id !== -1 && !!option.toggled;
            }).map(function(el) {
                return el.name;
            });
        }

        setFiltersModel();
    }
};

angular.module('skynda.btn-group', []).component('btnGroup', btnGroup);