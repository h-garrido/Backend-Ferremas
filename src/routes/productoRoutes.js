const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

router.get('/', productoController.getAllProductos);
router.post('/', productoController.createProducto);
router.get('/:codigo_producto', productoController.getProductoById);
router.put('/:codigo_producto', productoController.updateProducto);
router.delete('/:codigo_producto', productoController.deleteProducto);

module.exports = router;
