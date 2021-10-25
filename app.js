var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
var session= require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var novedadesRouter = require('./routes/novedades');
var nosotrosRouter = require('./routes/nosotros');
var galeriaRouter = require('./routes/galeria');
var contactoRouter = require('./routes/contacto');
var loginRouter= require('./routes/admin/login');
var adminRouter= require('./routes/admin/novedades');
const pool = require('./models/bd');
const { Cookie } = require('express-session');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret:'Hola1234',
  resave: false,
  saveUninitialized: true
}));

secured= async(req, res, next)=>{
  try {
    console.log(req.session.id_usuario);
    if(req.session.id_usuario){
      next();
    } else{
      res.redirect('/admin/login');
    }
  } catch (error) {
    console.log(error);
  }
}

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/novedades', novedadesRouter);
app.use('/nosotros', nosotrosRouter);
app.use('/galeria', galeriaRouter);
app.use('/contacto', contactoRouter);
app.use('/admin/login', loginRouter);
app.use('/admin/novedades', secured, adminRouter);

/* select
pool2.query('select * from datos_contacto').then(function(resultados){
  console.log(resultados)
});*/

//insert
/*var obj={
  nombre:'Rocio Belen',
  email:'rocio@hotmail.com',
  telefono:1212121212, 
  comentario:"hola, soy prueba 10"
}

pool.query('insert into datos_contacto set ?', [obj]).then(function(resultados){
  console.log(resultados)
});*/

//update
/*var nombre= 'Rocio Belen';
var obj={
  nombre:'Juana', 
  telefono: 1313131313
}
pool.query('update datos_contacto set ? where nombre=?', [obj, nombre]).then(function(resultados){
  console.log(resultados)
});*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


