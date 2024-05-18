const express = require('express');
const router = express.Router();
const empleadoController = require('../controllers/empleadoController');

/**
 * @swagger
 * tags:
 *   name: Empleados
 *   description: API para gestionar empleados
 */

/**
 * @swagger
 * /empleados:
 *   get:
 *     summary: Obtener todos los empleados
 *     tags: [Empleados]
 *     responses:
 *       200:
 *         description: Lista de empleados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Empleado'
 */
router.get('/', empleadoController.getAllEmpleados);

/**
 * @swagger
 * /empleados:
 *   post:
 *     summary: Crear un nuevo empleado
 *     tags: [Empleados]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Empleado'
 *     responses:
 *       200:
 *         description: Empleado creado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Empleado'
 */
router.post('/', empleadoController.createEmpleado);

/**
 * @swagger
 * /empleados/{id_empleado}:
 *   get:
 *     summary: Obtener empleado por ID
 *     tags: [Empleados]
 *     parameters:
 *       - in: path
 *         name: id_empleado
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del empleado
 *     responses:
 *       200:
 *         description: Empleado encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Empleado'
 *       404:
 *         description: Empleado no encontrado
 */
router.get('/:id_empleado', empleadoController.getEmpleadoById);

/**
 * @swagger
 * /empleados/{id_empleado}:
 *   put:
 *     summary: Actualizar un empleado por ID
 *     tags: [Empleados]
 *     parameters:
 *       - in: path
 *         name: id_empleado
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del empleado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Empleado'
 *     responses:
 *       200:
 *         description: Empleado actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Empleado'
 *       404:
 *         description: Empleado no encontrado
 */
router.put('/:id_empleado', empleadoController.updateEmpleado);

/**
 * @swagger
 * /empleados/{id_empleado}:
 *   delete:
 *     summary: Eliminar un empleado por ID
 *     tags: [Empleados]
 *     parameters:
 *       - in: path
 *         name: id_empleado
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del empleado
 *     responses:
 *       200:
 *         description: Empleado eliminado
 *       404:
 *         description: Empleado no encontrado
 */
router.delete('/:id_empleado', empleadoController.deleteEmpleado);

module.exports = router;
