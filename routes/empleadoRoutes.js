const express = require('express');
const router = express.Router();
const empleadoController = require('../controllers/empleadoController');

router.get('/', empleadoController.getAllEmpleados);
router.post('/', empleadoController.createEmpleado);
router.get('/:id_empleado', empleadoController.getEmpleadoById);
router.put('/:id_empleado', empleadoController.updateEmpleado);
router.delete('/:id_empleado', empleadoController.deleteEmpleado);

module.exports = router;
