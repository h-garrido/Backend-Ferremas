const express = require('express');
const router = express.Router();
const transaccionController = require('../controllers/transaccionController');

router.get('/', transaccionController.getAllTransacciones);
router.post('/', transaccionController.createTransaccion);
router.get('/:id_transaccion', transaccionController.getTransaccionById);
router.put('/:id_transaccion', transaccionController.updateTransaccion);
router.delete('/:id_transaccion', transaccionController.deleteTransaccion);

module.exports = router;
