const express = require('express');
const router = express.Router();
const pedidosController = require('../controllers/pedidosController');

/**
 * @swagger
 * tags:
 *   name: Pedidos
 *   description: API para gestionar pedidos
 */

/**
 * @swagger
 * /pedidos:
 *   get:
 *     summary: Obtener todos los pedidos
 *     tags: [Pedidos]
 *     responses:
 *       200:
 *         description: Lista de pedidos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pedido'
 */
router.get('/', pedidosController.getAllPedidos);

/**
 * @swagger
 * /pedidos:
 *   post:
 *     summary: Crear un nuevo pedido
 *     tags: [Pedidos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pedido'
 *     responses:
 *       200:
 *         description: Pedido creado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pedido'
 */
router.post('/', pedidosController.createPedido);

/**
 * @swagger
 * /pedidos/{id_pedido}:
 *   get:
 *     summary: Obtener pedido por ID
 *     tags: [Pedidos]
 *     parameters:
 *       - in: path
 *         name: id_pedido
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del pedido
 *     responses:
 *       200:
 *         description: Pedido encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pedido'
 *       404:
 *         description: Pedido no encontrado
 */
router.get('/:id_pedido', pedidosController.getPedidoById);

/**
 * @swagger
 * /pedidos/{id_pedido}:
 *   put:
 *     summary: Actualizar un pedido por ID
 *     tags: [Pedidos]
 *     parameters:
 *       - in: path
 *         name: id_pedido
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del pedido
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pedido'
 *     responses:
 *       200:
 *         description: Pedido actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pedido'
 *       404:
 *         description: Pedido no encontrado
 */
router.put('/:id_pedido', pedidosController.updatePedido);

/**
 * @swagger
 * /pedidos/{id_pedido}:
 *   delete:
 *     summary: Eliminar un pedido por ID
 *     tags: [Pedidos]
 *     parameters:
 *       - in: path
 *         name: id_pedido
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del pedido
 *     responses:
 *       200:
 *         description: Pedido eliminado
 *       404:
 *         description: Pedido no encontrado
 */
router.delete('/:id_pedido', pedidosController.deletePedido);

module.exports = router;
