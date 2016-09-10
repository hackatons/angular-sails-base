/**
 * grunt/pipeline.js
 *
 * The order in which your css, javascript, and template files should be
 * compiled and linked from your views and static HTML files.
 *
 * (Note that you can take advantage of Grunt-style wildcard/glob/splat expressions
 * for matching multiple files.)
 */



// CSS files to inject in order
//
// (if you're using LESS with the built-in default config, you'll want
//  to change `assets/styles/importer.less` instead.)
var cssFilesToInject = [
  '/bower_components/bootstrap/dist/css/bootstrap.min.css',
  '/bower_components/font-awesome/css/font-awesome.min.css',
  '/bower_components/angular-material/angular-material.min.css',
  '/bower_components/angularjs-slider/dist/rzslider.min.css',
  'styles/**/*.css',
  'js/**/components/**/*.css'
];


// Client-side javascript files to inject in order
// (uses Grunt-style wildcard/glob/splat expressions)
var jsFilesToInject = [

  // Load sails.io before everything else
  'js/dependencies/sails.io.js',

  //prefixfree.min.js
  '/bower_components/prefixfree/prefixfree.min.js',

  //underscore.min.js
  '/bower_components/underscore/underscore-min.js',

  //angularjs
  '/bower_components/angular/angular.min.js',
  '/bower_components/angular-ui-router/release/angular-ui-router.min.js',
  '/bower_components/angular-animate/angular-animate.min.js',
  '/bower_components/angular-aria/angular-aria.min.js',
  '/bower_components/angular-material/angular-material.min.js',
  '/bower_components/angular-ui-bootstrap-bower/ui-bootstrap-tpls.min.js',
  '/bower_components/angular-sanitize/angular-sanitize.min.js',
  '/bower_components/angular-scroll-glue/src/scrollglue.js',
  '/bower_components/angular-translate/angular-translate.min.js',
  '/bower_components/angular-translate-loader-url/angular-translate-loader-url.min.js',
  '/bower_components/angularjs-slider/dist/rzslider.min.js',

   //angular sails
  '/bower_components/angular-sails/dist/angular-sails.min.js',

  //angularjs services
  '/js/services/crud.js',

  //angularjs directives
  '/js/directives/angular-share.js',
  '/js/directives/angular-diff.js',

  //angularjs main application
  '/js/app/*.js',

  //angularjs services
  '/js/services/*.js',

  //angularjs controllers
  '/js/controllers/*.js',

  // will be injected here in no particular order.
  'js/**/*.js'
  //'bower_components/**/*.min.js'
];


// Client-side HTML templates are injected using the sources below
// The ordering of these templates shouldn't matter.
// (uses Grunt-style wildcard/glob/splat expressions)
//
// By default, Sails uses JST templates and precompiles them into
// functions for you.  If you want to use jade, handlebars, dust, etc.,
// with the linker, no problem-- you'll just want to make sure the precompiled
// templates get spit out to the same file.  Be sure and check out `tasks/README.md`
// for information on customizing and installing new tasks.
var templateFilesToInject = [
  'templates/**/*.html'
];



// Prefix relative paths to source files so they point to the proper locations
// (i.e. where the other Grunt tasks spit them out, or in some cases, where
// they reside in the first place)
module.exports.cssFilesToInject = cssFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.jsFilesToInject = jsFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.templateFilesToInject = templateFilesToInject.map(function(path) {
  return 'assets/' + path;
});
