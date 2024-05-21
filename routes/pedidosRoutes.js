const express = require('express');
const router = express.Router();
const pedidosController = require('../controllers/pedidosController');

router.get('/', pedidosController.getAllPedidos);
router.post('/', pedidosController.createPedido);
router.get('/:id_pedido', pedidosController.getPedidoById);
router.put('/:id_pedido', pedidosController.updatePedido);
router.delete('/:id_pedido', pedidosController.deletePedido);

module.exports = router;
