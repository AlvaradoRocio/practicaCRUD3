var express = require('express');
var router = express.Router();
var nodemailer=require("nodemailer");
var contacto= require('../models/contactoModel')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contacto', {
    isContacto: true
  });
});

/*router.post('/', async function(req, res, next){
  var nombre= req.body.nombre;
  var email= req.body.mail;
  var telefono= req.body.tel;
  var comentario= req.body.comentar;
  
  var obj={
    to:'rociobalvarado51@gmail.com', 
    subject: 'contacto desde web', 
    html: nombre + ' se contactó a traves de la web. Dejó el siguiente comentario: ' + comentario + 
    '<br>Desea que lo contacten por el mail: ' + email + ' o el teléfono: '+telefono
  }

  var transport= nodemailer.createTransport({
    host:process.env.SMTP_HOST, 
    port: process.env.SMTP_PORT, 
    auth:{
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
  var info= await transport.sendMail(obj);

  res.render('contacto', {
    isContacto: true,
    message: 'Mensaje enviado correctamente'
  });
});*/

router.post('/', async function(req, res, next){
  contacto.insertContacto(req.body);
  res.render('contacto', {
    isContacto: true,
    message: 'Mensaje enviado correctamente'
  });
});

module.exports = router;

