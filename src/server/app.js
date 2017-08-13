/*jshint node:true*/
'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var logger = require('morgan');
var port = process.env.PORT || 8001;
var four0four = require('./utils/404')();
var config = require('./config');
var db = require('./db/db.config');
var environment = process.env.NODE_ENV;
var errorHandler = require('./middlewares/error-handler');


process.env.SECRET_KEY = 'phuong';

app.use(favicon(__dirname + '/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(logger('dev'));

app.use(config.BASE_URL + '/users', require('./routes/user.routes')());
app.use(config.BASE_URL + '/auth', require('./routes/auth.routes')());
app.use(config.BASE_URL + '/unit', require('./routes/unit.routes')());
app.use(config.BASE_URL + '/lesson', require('./routes/lesson.routes')());
app.use(config.BASE_URL + '/vocabulary', require('./routes/vocabulary.routes')());
app.use(config.BASE_URL + '/grammar', require('./routes/grammar.routes')());
app.use(config.BASE_URL + '/test', require('./routes/test.routes')());
app.use(config.BASE_URL + '/question', require('./routes/question.routes')());
app.use(config.BASE_URL + '/score', require('./routes/score.routes')());

console.log('About to crank up node');
console.log('PORT=' + port);
console.log('NODE_ENV=' + environment);

switch (environment) {
    case 'build':
        console.log('** BUILD **');
        app.use(express.static('./build/'));
        // Any invalid calls for templateUrls are under app/* and should return 404
        app.use('/app/*', function (req, res, next) {
            four0four.send404(req, res);
        });
        // Invalid calls to assets should return the custom error object to mitigate
        // against XSS reflected attacks
        app.use('/js/*', function (req, res, next) {
            four0four.send404(req, res);
        });
        app.use('/images/*', function (req, res, next) {
            four0four.send404(req, res);
        });
        app.use('/styles/*', function (req, res, next) {
            four0four.send404(req, res);
        });
        // Any deep link calls should return index.html
        app.use('/*', express.static('./build/index.html'));
        break;
    default:
        console.log('** DEV **');
        app.use(express.static('./src/client/'));
        app.use(express.static('./'));
        app.use(express.static('./tmp'));
        // Any invalid calls for templateUrls are under app/* and should return 404
        app.use('/app/*', function (req, res, next) {
            four0four.send404(req, res);
        });
        // Any deep link calls should return index.html
        app.use('/*', express.static('./src/client/index.html'));
        break;
}

app.use(errorHandler.errorHandler());

app.listen(port, function () {
    console.log('Express server listening on port ' + port);
    console.log('env = ' + app.get('env') +
        '\n__dirname = ' + __dirname +
        '\nprocess.cwd = ' + process.cwd());
});

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    jade = require('gulp-jade'),
    less = require('gulp-less');

// functions ----------------------

gulp.task('default', ['compile']);

gulp.task('compile', function () {
    return gulp.src('./less/*.less')
        .pipe(less())
        .pipe(gulp.dest('./scss'));
});