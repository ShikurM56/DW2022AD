const express = require ('express')
const router = express.Router() //Mini aplicacion completa que podemos mandar a escuchar peticiones, nos va a ayudar a definir rutas y despues el elemento lo adherimos a express para que sea heredado
const consolaController = require('../controllers/consola')

//Create, Read, Update, Delete

//Servicio para mostrar el formulario
router.get('/altaConsola', consolaController.getAltaConsola)

//Servicio para procesar los datos del formulario
router.post('/altaConsola', consolaController.postAltaConsola)

//Servicio para consular todos los datos
router.get('/consultaConsola', consolaController.getConsultaConsola )


//Servicio para mostrar el formulario
router.get('/altaTarea', consolaController.getAltaTarea)

//Servicio para consular todos los datos
router.post('/tarea2_f', consolaController.postTarea2_f)

//Servicio para consular todos los datos
router.post('/tarea2_p', consolaController.postTarea2_p)

module.exports = router

