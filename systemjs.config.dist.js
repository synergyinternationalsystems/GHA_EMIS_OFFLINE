/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'dist',

            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            "@synisys/ng-controls": "npm:@synisys/ng-controls",
            "@synisys/idm-common-util-frontend": "npm:@synisys/idm-common-util-frontend",
            "@synisys/idm-crosscutting-concepts-frontend": "npm:@synisys/idm-crosscutting-concepts-frontend",

            // other libraries
            'rxjs':                      'npm:rxjs',
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: { main: './main.js', defaultExtension: 'js' },
            rxjs: { defaultExtension: 'js' },
            '@synisys/ng-controls': { main: "./index.js", defaultExtension: "js" },
            '@synisys/idm-common-util-frontend': { main: "./index.js", defaultExtension: "js" },
            '@synisys/idm-crosscutting-concepts-frontend': { main: "./index.js", defaultExtension: "js" }
        }
    });
})(this);