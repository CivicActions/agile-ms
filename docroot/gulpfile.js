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
    'js/app.js',
  ])
    .pipe(gulp.dest(config.publicDir + '/js/'))
    .pipe(livereload());
});

gulp.task('sass', function() {
  gulp.src(config.cssDir + '/*.scss')
    .pipe(sass())
    .pipe(gulp.dest(config.publicDir + '/css'))
    .pipe(livereload());
});

gulp.task('watch', ['server'], function() {
  livereload.listen({ basePath: '.' });
  gulp.watch(config.cssDir + '/*.scss', ['sass']);
  gulp.watch(config.jsDir + '/app.js', ['js']);
});

gulp.task('server', function(done) {
  http.createServer(
    st({ path: __dirname + '/', index: 'index.html', cache: false })
  ).listen(8080, done);
});

gulp.task('default', ['watch', 'server', 'fonts', 'js', 'sass']);
