var express = require('express');
var router = express.Router();
var novedadesModel= require('./../../models/novedadesModel');

/* GET home page. */
router.get('/', async function(req, res, next) {
  var novedades;
  if(req.query.q===undefined){
    novedades= await novedadesModel.getNovedades();
  } else{
    novedades=await novedadesModel.buscarNovedades(req.query.q);
  }
  res.render('admin/novedades', {
      layout: 'admin/layout', 
      usuario: req.session.nombre,
      novedades, 
      is_search: req.query.q!==undefined, 
      q:req.query.q
  })});

router.get('/eliminar/:id', async (req, res, next)=>{
  var id = req.params.id;
  await novedadesModel.deleteNovedades(id);
  res.redirect('/admin/novedades');
});

router.get('/agregar', (req, res, next)=>{
  res.render('admin/agregar', {
    layout: 'admin/layout'
  });
});

router.post('/agregar', async (req, res, next)=>{
  try {
    if(req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != ""){
      await novedadesModel.agregarNovedades(req.body);
      res.redirect('/admin/novedades');
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout', 
        error:true, 
        message: 'Todos los campos son requeridos'
      });
    }
  } catch (error) {
    console.log(error)
    res.render('admin/agregar', {
      layout:'admin/layout',
      error: true, 
      message: 'No se cargó la novedad'
    });
  }
});


router.get('/modificar/:id', async (req, res, next)=>{
  let novedad= await novedadesModel.getNovedadById(req.params.id);
  
  res.render('admin/modificar',{
    layout:'admin/layout',
    novedad
  });
});

router.post('/modificar', async function(req, res, next){
  try {
    let obj={
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo
    }
    await novedadesModel.modificarNovedadById(obj, req.body.id);
    res.redirect('/admin/novedades');

  } catch (error) {
    console.log(error);
    res.render('admin/modificar', {
      layout:'admin/layout', 
      error:true,
      message: 'No se modificó la novedad'
    });
  }
});



  module.exports = router;