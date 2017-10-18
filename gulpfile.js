const nodemon = require('gulp-nodemon'),
      livereload = require('gulp-livereload'),
      gulp = require('gulp')
    
gulp.task('develop', function() {
  // listen for changes
  livereload.listen();
  // configure nodemon
  nodemon({
    // the script to run the app
    script: 'bin/www',
    ext: 'js html css',
    watch: 'src'
  }).on('restart', function(){
    // when the app has restarted, run livereload.
    gulp.src('bin/www')
      .pipe(livereload())
  })
});

gulp.task('default', [
  'develop'
]);