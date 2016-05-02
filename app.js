var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var fs=require('fs');
var bodyParser = require('body-parser')
var session = require('express-session');
var allConst=fs.readdirSync('./public/constant');
	for(var i in allConst)
	{
		if(fs.statSync('./public/constant/'+allConst[i]).isFile())
		{
			require('./public/constant/'+allConst[i]);
		}
	}
require('./public/constant/path');
var index=require('./routes/index');
var app = express();
app.use(session({secret: 'achiles'}));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
var allRouter =fs.readdirSync('./routes');
	for(var i in allRouter)
	{
		if(fs.statSync('./routes/'+allRouter[i]).isFile())
		{
			var name=allRouter[i].substring(0,allRouter[i].lastIndexOf('.'));
			var obj=require('./routes/'+name);

			try{
			var objController=require('./controllers/'+name+'_Controller');

			var crl=new objController(name);

			obj.setController(crl);
			}catch(exception){};
			app.use('/'+name, obj);
		}
	}

	// view engine setup
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
