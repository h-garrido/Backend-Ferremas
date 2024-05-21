const express = require('express');
const router = express.Router();
const detallePedidosController = require('../controllers/detallePedidosController');

router.get('/', detallePedidosController.getAllDetallePedidos);
//router.put('/', detallePedidosController.updateDetallePedidos);
//router.patch('/', detallePedidosController.addProductoDetallePedidos);
router.delete('/', detallePedidosController.deleteDetallePedidos);

module.exports = router;