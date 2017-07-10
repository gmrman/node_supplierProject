var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var $route = require('./route');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.cookieParser());//开启cookie
// app.use(express.session({//开启session
//   secret: config.secret
// }));
// app.use(function (req, res, next) {
//   console.log('Time:', Date.now());
//   next();
// });

app.use(require('./routes/auth'));
//加载需要处理的js
for (var s in $route) {
  app.use('/' + s, require($route[s]));
}

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);

  // res.render('error');
  res.send({ status: 0, message: "error" });
});

module.exports = app;
