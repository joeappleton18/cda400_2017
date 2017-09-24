var gulp = require('gulp');
var htmlhint = require("gulp-htmlhint");
var clean = require("gulp-clean");
var unzip = require("gulp-unzip");
var  file = require('gulp-file');
var open = require('gulp-open');

gulp.task('lint', function() {
  return gulp.src("internet_tech_tca/*.html")
    .pipe(htmlhint())
    .pipe(htmlhint.failReporter())
});

gulp.task('name', function() {
    
   console.log('mock_tca'); 
    
});
gulp.task('open', function(){
    gulp.src('internet_tech_tca/index.html')
        .pipe(open());

    gulp.src('feedback.md')
        .pipe(open());
    
    
    


})

gulp.task('copy-feedback', function() {
    gulp.src('master_files/feedback.md').
    pipe(gulp.dest('.'))
});

 gulp.task('unzip', function(){
  var minimatch = require('minimatch')
  gulp.src("*.zip")
    .pipe(unzip())
    .pipe(gulp.dest('.'));

})

gulp.task('clean', function(){

    return gulp.src(['internet_tech_tca', 'internet_tech_tca.*', 'feedback.md', '*.zip'], {read: false})
        .pipe(clean());

})


gulp.task('default', ['unzip', 'lint', 'copy-feedback', 'open']);
