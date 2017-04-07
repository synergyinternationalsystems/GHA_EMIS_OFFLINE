var gulp = require('gulp');
var sass = require('gulp-sass');
var winInstaller = require('electron-windows-installer');

// gulp.task('create-windows-installer', function(done) {
//     winInstaller({
//         appDirectory: '../dist/GhanaEmis-win32-x64',
//         outputDirectory: '../dist/installers',
//         iconUrl: "http://www.iconarchive.com/download/i34176/treetog/i/Doc-File.ico",
//         arch: 'ia32'
//     }).then(done).catch(done);
// });
//
// gulp.task('sass', function () {
//
//     gulp.src('app/**/*.scss', { base: "./" })
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulp.dest("./"));
// });
//
// gulp.task('sass:watch', function () {
//     gulp.watch('app/**/*.scss', ['sass']);
// });
//
var cleanCompiledTypeScript = require('gulp-clean-compiled-typescript');

gulp.task('cleanCompiledJavascript', function () {
    return gulp.src('./app/**/*.ts')
        .pipe(cleanCompiledTypeScript());
});


///////////////////////////////////

// var winInstaller = require('electron-windows-installer');
//
// gulp.task('create-windows-installer', function(done) {
//     winInstaller({
//         appDirectory: '../ghana-emis-packaged2/GhanaEMIS-win32-x64',
//         outputDirectory: '../dist-electron-windows-installer',
//         arch: 'x64'
//     }).then(done).catch(done);
// });

////////////////////////////////////////////////////////


// var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');
var clean = require('gulp-clean');
const embedTemplates = require('gulp-angular2-embed-templates');
var embedSass = require('gulp-angular2-embed-sass');
var pump = require('pump');
// var sass = require('gulp-sass');

// gulp.task('embedTemplates', function () {
//     gulp.src('app/**/*.ts') // also can use *.js files
//         .pipe(embedTemplates({sourceType:'ts'}))
//         .pipe(embedSass())
//         .pipe(gulp.dest('./dist'));
// });

gulp.task('builder', function(cb) {
    var path = require("path");
    var Builder = require('systemjs-builder');
    var builder = new Builder('.', './systemjs.config.js');

    builder.buildStatic('app/main.js', 'app.js', { minify: false })
        .then(function() {
            console.log('Build complete');
            cb();
        })
        .catch(function(err) {
            console.log('Build error');
            console.log(err);
        });
});

gulp.task('compress', ['builder'], function (cb) {
    pump([
            gulp.src([
                'node_modules/core-js/client/shim.min.js',
                'node_modules/zone.js/dist/zone.js',
                'node_modules/reflect-metadata/Reflect.js',
                'node_modules/systemjs/dist/system.src.js',
                'node_modules/rxjs/bundles/Rx.min.js',
                'node_modules/material-design-lite/material.min.js',
                'node_modules/@synisys/ng-controls/app/library/kendo/js/jquery.min.js',
                'node_modules/@synisys/ng-controls/app/library/kendo/js/kendo.all.min.js',
                'systemjs.config.js',
                'app.js'
            ]),
            concat('app.bundle.js'),
            uglify(),
            gulp.dest('./')
        ],
        cb
    );
});

/////////////////////////////////////////////////////////
gulp.task('default', ['generate-build-aot']);

gulp.task('bundle-aot', function () {
    return gulp.src([
        'node_modules/@angular/core/bundles/core.umd.min.js',
        'node_modules/@angular/common/bundles/common.umd.min.js',
        'node_modules/@angular/compiler/bundles/compiler.umd.js',
        'node_modules/@angular/platform-browser/bundles/platform-browser.umd.min.js',
        'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js',
        'node_modules/core-js/client/shim.min.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/systemjs/index.js',
        'node_modules/rxjs/bundles/Rx.min.js',
        'https://use.fontawesome.com/75fc6e8b1a.js',
        'node_modules/material-design-lite/material.min.js',
        'node_modules/@synisys/ng-controls/app/library/kendo/js/jquery.min.js',
        'node_modules/@synisys/ng-controls/app/library/kendo/js/kendo.all.min.js',
        'systemjs.config.js'
    ])
        .pipe(concat('app.bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest('../www/'));
});

gulp.task('copy-template', function () {
    return gulp.src([
        'app/**/*.html'
    ])
        .pipe(gulp.dest('../www/app'))
});

gulp.task('copy-template-css', function () {
    return gulp.src([
        'app/**/*.css'
    ])
        .pipe(gulp.dest('../www/app'))
});

gulp.task('copy-css', function () {
    return gulp.src([
        'https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en',
        'https://fonts.googleapis.com/icon?family=Material+Icons',
        'https://code.getmdl.io/1.1.3/material.grey-pink.min.css',
        'images/favicon.ico',
        'node_modules/@synisys/ng-controls/app/common/common.css',
        'node_modules/@synisys/ng-controls/app/library/kendo/styles/kendo.common-material.min.css',
        'node_modules/@synisys/ng-controls/app/library/kendo/styles/kendo.rtl.min.css',
        'node_modules/@synisys/ng-controls/app/library/kendo/styles/kendo.material.min.css',
        'node_modules/@synisys/ng-controls/app/library/kendo/styles/kendo.material.mobile.min.css',
        'node_modules/@synisys/ng-controls/app/common/kendoOverwrites.css',
        'app/resources/custom.css'
    ])
        .pipe(concat('app.css'))
        .pipe(minifyCSS())
        .pipe(rename('app.min.css'))
        .pipe(gulp.dest('.'))
});

gulp.task('copy-images', function () {
    return gulp.src([
        'images/**/*'
    ])
        .pipe(gulp.dest('../www/images'))
});

gulp.task('copy-fonts', function () {
    return gulp.src([
        'fonts/**/*'
    ])
        .pipe(gulp.dest('../www/fonts'))
});

gulp.task('generate-build', ['bundle', 'copy-template', 'copy-template-css', 'copy-css', 'copy-images', 'copy-fonts'], function () {
    return gulp.src([
        'app.js'
    ])
        .pipe(clean({force: true}));
});

gulp.task('generate-build-aot', ['bundle-aot', 'copy-css', 'copy-images', 'copy-fonts'], function () {
    return gulp.src([
        'app.js'
    ])
        .pipe(clean({force: true}));
});

gulp.task('styles', function() {
    gulp.src('scss/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('.'))
});

gulp.task('component-styles', function() {
    gulp.src("app/**/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(function(file) {
            return file.base;
        }));
});

//Watch task
gulp.task('watch',function() {
    gulp.watch('scss/**/*.scss', ['styles']);
    gulp.watch('app/**/*.scss', ['component-styles']);
});




