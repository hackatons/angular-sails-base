var btnGroup = {
    // = - two-way binding
    // < - one-way binding
    // @ - string binding
    // & - callback binding
    bindings: {
        options: '<',
        shape: '<'
    },
    templateUrl: '/js/components/btn-group/btn-group.html',
    controller: function() {
    }
};

angular.module('skynda.btn-group', []).component('btnGroup', btnGroup);