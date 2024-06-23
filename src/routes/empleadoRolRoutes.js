const express = require('express');
const router = express.Router();
const empleadoRolController = require('../controllers/empleadoRolController');

router.get('/', empleadoRolController.getAllEmpleadoRols);
router.get('/:id', empleadoRolController.getEmpleadoRolById);
router.post('/', empleadoRolController.createEmpleadoRol);
router.put('/:id', empleadoRolController.updateEmpleadoRol);
router.delete('/:id', empleadoRolController.deleteEmpleadoRol);

module.exports = router;