var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('app/**/*.scss', { base: "./" })
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("./"));
});

gulp.task('sass:watch', function () {
    gulp.watch('app/**/*.scss', ['sass']);
});

var cleanCompiledTypeScript = require('gulp-clean-compiled-typescript');

gulp.task('cleanCompiledJavascript', function () {
    return gulp.src('./app/**/*.ts')
        .pipe(cleanCompiledTypeScript());
});


var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');
var clean = require('gulp-clean');
var flatten = require('gulp-flatten');
const embedTemplates = require('gulp-angular2-embed-templates');
var embedSass = require('gulp-angular2-embed-sass');
var pump = require('pump');

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

gulp.task('bundle', ['builder'], function (cb) {
    pump([
            gulp.src([
                'node_modules/@synisys/ng-controls/app/library/kendo/js/jquery.min.js',
                'node_modules/@synisys/ng-controls/app/library/kendo/js/kendo.all.min.js',
                'node_modules/core-js/client/shim.min.js',
                'node_modules/zone.js/dist/zone.js',
                'node_modules/systemjs/dist/system.src.js',
                'node_modules/material-design-lite/material.min.js',
                'app.js'
            ]),
            // concat('app.bundle.js'),
            // uglify(),
            flatten(),
            gulp.dest('../gha-emis-offline-production')
        ],
        cb
    );
});

gulp.task('copy-template', function () {
    gulp.src([
        'app/**/*.html'
    ])
        .pipe(flatten())
        .pipe(gulp.dest('../gha-emis-offline-production'))
});

gulp.task('copy-template-css', function () {
    return gulp.src([
        'app/**/*.css'
    ])
        .pipe(flatten())
        .pipe(gulp.dest('../gha-emis-offline-production'))
});

gulp.task('copy-css', function () {
    return gulp.src([
        'app/resources/google.api.fonts.css',
        'app/resources/material.icons.css',
        'app/resources/material.grey-pink.min.css',
        'node_modules/@synisys/ng-controls/app/common/common.css',
        'node_modules/@synisys/ng-controls/app/library/kendo/styles/kendo.common-material.min.css',
        'node_modules/@synisys/ng-controls/app/library/kendo/styles/kendo.rtl.min.css',
        'node_modules/@synisys/ng-controls/app/library/kendo/styles/kendo.material.min.css',
        'node_modules/@synisys/ng-controls/app/library/kendo/styles/kendo.material.mobile.min.css',
        'node_modules/@synisys/ng-controls/app/common/kendoOverwrites.css',
        'app/resources/custom.css'
    ])
        // .pipe(concat('app.css'))
        // .pipe(minifyCSS())
        // .pipe(rename('app.min.css'))
        .pipe(flatten())
        .pipe(gulp.dest('../gha-emis-offline-production'))
});

gulp.task('copy-images', function () {
    return gulp.src([
        'app/**/*.png',
        'app/**/*.gif',
        'app/**/*.ico',
        'app/**/*.jpg'
    ])
        .pipe(gulp.dest('../gha-emis-offline-production/app'))
});

gulp.task('copy-db-scripts', function () {
    return gulp.src('database/**/*.js')
        .pipe(gulp.dest('../gha-emis-offline-production/database'))
});

gulp.task('copy-root-files', function () {
    return gulp.src(['*.css', '*.html', '*.js', '*.json', '*.sh', '!index.html'])
        .pipe(gulp.dest('../gha-emis-offline-production'))
});

gulp.task('copy-helps', function () {
    return gulp.src('help/**/*')
        .pipe(gulp.dest('../gha-emis-offline-production/help'))
});

gulp.task('generate-build', ['bundle', 'copy-template', 'copy-db-scripts', 'copy-root-files', 'copy-helps', 'copy-template-css', 'copy-css', 'copy-images'], function () {
    return gulp.src([
        'app.js'
    ])
        .pipe(clean({force: true}));
});