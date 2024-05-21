const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.get('/', clienteController.getAllClientes);
router.post('/', clienteController.createCliente);
router.get('/:id_cliente', clienteController.getClienteById);
router.put('/:id_cliente', clienteController.updateCliente);
router.delete('/:id_cliente', clienteController.deleteCliente);

module.exports = router;
