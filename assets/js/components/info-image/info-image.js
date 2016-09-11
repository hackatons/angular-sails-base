var infoImage = {
    transclude: true,
    // = - two-way binding
    // < - one-way binding
    // @ - string binding
    // & - callback binding
    bindings: {
        src: '<',
        href: '<'
    },
    templateUrl: '/js/components/info-image/info-image.html',
    controller: function() {
    }
};

angular.module('skynda.info-image', []).component('infoImage', infoImage);