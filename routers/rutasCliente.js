const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

//RUTAS DEL CRUD
router.post('/', clienteController.agregarClientes);
router.get('/', clienteController.buscarClientes);
router.get('/:id', clienteController.mostrarClientes);
// router.patch('/:id', clienteController.modificarClientes); // METODO PACTH
router.put('/:id', clienteController.actualizarClientes); // METODO PUT
router.delete('/:id', clienteController.eliminarClientes); // METODO DELETE

module.exports = router;

