var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var watch = require('gulp-watch');
var http = require('http');
var st = require('st');

var config = {
  bowerDir: 'bower_components',
  publicDir: 'public',
  cssDir: 'css',
  jsDir: 'js',
  viewDir: 'views'
};

gulp.task('fonts', function() {
  gulp.src([
    config.bowerDir + '/bootstrap-sass/assets/fonts/**/*',
  ])
    .pipe(gulp.dest(config.publicDir + '/fonts'));
});

gulp.task('js', function() {
  gulp.src([
    config.bowerDir + '/jquery/dist/jquery.min.js',
    config.bowerDir + '/bootstrap-sass/assets/javascripts/bootstrap.js',
    config.bowerDir + '/angular/angular.js',
    config.bowerDir + '/angular-sanitize/angular-sanitize.js',
    config.bowerDir + '/angular-animate/angular-animate.js',
    config.bowerDir + '/angular-resource/angular-resource.js',
    config.bowerDir + '/angular-touch/angular-touch.js',
    config.bowerDir + '/angular-ui-router/release/angular-ui-router.js',
    config.bowerDir + '/angular-bootstrap/ui-bootstrap.js',
    config.bowerDir + '/lodash/lodash.js',
    config.bowerDir + '/angular-simple-logger/dist/angular-simple-logger.js',
    config.bowerDir + '/angular-google-maps/dist/angular-google-maps.js',
  ])
    .pipe(gulp.dest(config.publicDir + '/js/'))
    .pipe(livereload());

  gulp.src(['js/**/*.js'])
    .pipe(gulp.dest(config.publicDir + '/js/'))
    .pipe(livereload());
});

gulp.task('sass', function() {
  gulp.src(config.cssDir + '/*.scss')
    .pipe(sass())
    .pipe(gulp.dest(config.publicDir + '/css'))
    .pipe(livereload());
});

gulp.task('html', function() {
  gulp.src(config.viewDir + '/**/*.html')
    .pipe(gulp.dest(config.publicDir + '/views'))
    .pipe(livereload());
})

gulp.task('watch', ['server'], function() {
  livereload.listen({ basePath: '.' });
  gulp.watch(config.viewDir + '/**/*.html', ['html']);
  gulp.watch(config.cssDir + '/**/*.scss', ['sass']);
  gulp.watch(config.jsDir + '/**/*.js', ['js']);
});

gulp.task('server', function(done) {
  http.createServer(
    st({ path: __dirname + '/', index: 'index.html', cache: false })
  ).listen(8080, done);
});

gulp.task('default', ['watch', 'server', 'fonts', 'js', 'sass']);
