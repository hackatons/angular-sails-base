var btnGroup = {
    // = - two-way binding
    // < - one-way binding
    // @ - string binding
    // & - callback binding
    bindings: {
        options: '<',
        shape: '<'
    },
    templateUrl: 'btn-group.template.html',
    controller: function() {
    }
};

angular.module('component.btn-group', []).component('btnGroup', btnGroup);