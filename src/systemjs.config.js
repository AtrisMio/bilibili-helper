/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    defaultExtension: '',
    defaultJSExtensions: true,
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      background: 'js/bh-background',
      option: 'js/bh-option',
      popup: 'js/bh-popup',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

      // other libraries
      'rxjs': 'npm:rxjs',
    },
    bundles: {
      '@angular2': [
        '@angular/core',
        '@angular/common',
        '@angular/compiler',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/http',
        '@angular/router',
        '@angular/forms',
      ]
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      background: {
        main: 'background-boot',
        defaultExtension: 'js'
      },
      options:{
        main: 'option-boot',
        defaultExtension: 'js'
      },
      popup:{
        main: 'popup-boot',
        defaultExtension: 'js'
      },
      dest: {
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });
})(this);