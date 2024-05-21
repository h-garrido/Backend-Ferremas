const express = require('express');
const router = express.Router();
const transaccionController = require('../controllers/transaccionController');

/**
 * @swagger
 * tags:
 *   name: Transacciones
 *   description: API para gestionar transacciones
 */

/**
 * @swagger
 * /transacciones:
 *   get:
 *     summary: Obtener todas las transacciones
 *     tags: [Transacciones]
 *     responses:
 *       200:
 *         description: Lista de transacciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Transaccion'
 */
router.get('/', transaccionController.getAllTransacciones);

/**
 * @swagger
 * /transacciones:
 *   post:
 *     summary: Crear una nueva transacción
 *     tags: [Transacciones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Transaccion'
 *     responses:
 *       200:
 *         description: Transacción creada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Transaccion'
 */
router.post('/', transaccionController.createTransaccion);

/**
 * @swagger
 * /transacciones/{id_transaccion}:
 *   get:
 *     summary: Obtener transacción por ID
 *     tags: [Transacciones]
 *     parameters:
 *       - in: path
 *         name: id_transaccion
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la transacción
 *     responses:
 *       200:
 *         description: Transacción encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Transaccion'
 *       404:
 *         description: Transacción no encontrada
 */
router.get('/:id_transaccion', transaccionController.getTransaccionById);

/**
 * @swagger
 * /transacciones/{id_transaccion}:
 *   put:
 *     summary: Actualizar una transacción por ID
 *     tags: [Transacciones]
 *     parameters:
 *       - in: path
 *         name: id_transaccion
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la transacción
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Transaccion'
 *     responses:
 *       200:
 *         description: Transacción actualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Transaccion'
 *       404:
 *         description: Transacción no encontrada
 */
router.put('/:id_transaccion', transaccionController.updateTransaccion);

/**
 * @swagger
 * /transacciones/{id_transaccion}:
 *   delete:
 *     summary: Eliminar una transacción por ID
 *     tags: [Transacciones]
 *     parameters:
 *       - in: path
 *         name: id_transaccion
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la transacción
 *     responses:
 *       200:
 *         description: Transacción eliminada
 *       404:
 *         description: Transacción no encontrada
 */
router.delete('/:id_transaccion', transaccionController.deleteTransaccion);

module.exports = router;
