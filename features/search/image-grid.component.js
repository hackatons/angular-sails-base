var imageGrid = {
    // = - two-way binding
    // < - one-way binding
    // @ - string binding
    // & - callback binding
    bindings: {
        options: '<'
    },
    templateUrl: 'image-grid.template.html',
    controller: function() {
        this.options = [
            { 
                title: 'YO YO', 
                description: 'lorem ipsum qqweqwe adw awd awd ad ad aw a awdawda dawa',
                src: 'http://www.rhaein.com/funnystuff/images/random/random235.jpg',
                href: 'http://www.edaville.com/dino-land'                
            },
            { 
                title: 'YO YO 2', 
                description: 'lorem ipsum qqweqwe adw awd awd ad ad aw a awdawda dawa',
                src: 'http://www.rhaein.com/funnystuff/images/random/random235.jpg',
                href: 'http://www.edaville.com/dino-land'                
            },
            { 
                title: 'YO YO 3', 
                description: 'lorem ipsum qqweqwe adw awd awd ad ad aw a awdawda dawa',
                src: 'http://www.rhaein.com/funnystuff/images/random/random235.jpg',
                href: 'http://www.edaville.com/dino-land'                 
            }
        ];
    }
};

angular.module('component.image-grid', []).component('imageGrid', imageGrid);