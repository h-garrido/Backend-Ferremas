const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

/**
 * @swagger
 * tags:
 *   name: Productos
 *   description: API para gestionar productos
 */

/**
 * @swagger
 * /productos:
 *   get:
 *     summary: Obtener todos los productos
 *     tags: [Productos]
 *     responses:
 *       200:
 *         description: Lista de productos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Producto'
 */
router.get('/', productoController.getAllProductos);

/**
 * @swagger
 * /productos:
 *   post:
 *     summary: Crear un nuevo producto
 *     tags: [Productos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Producto'
 *     responses:
 *       200:
 *         description: Producto creado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Producto'
 */
router.post('/', productoController.createProducto);

/**
 * @swagger
 * /productos/{codigo_producto}:
 *   get:
 *     summary: Obtener producto por código
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: codigo_producto
 *         schema:
 *           type: string
 *         required: true
 *         description: Código del producto
 *     responses:
 *       200:
 *         description: Producto encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Producto'
 *       404:
 *         description: Producto no encontrado
 */
router.get('/:codigo_producto', productoController.getProductoById);

/**
 * @swagger
 * /productos/{codigo_producto}:
 *   put:
 *     summary: Actualizar un producto por código
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: codigo_producto
 *         schema:
 *           type: string
 *         required: true
 *         description: Código del producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Producto'
 *     responses:
 *       200:
 *         description: Producto actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Producto'
 *       404:
 *         description: Producto no encontrado
 */
router.put('/:codigo_producto', productoController.updateProducto);

/**
 * @swagger
 * /productos/{codigo_producto}:
 *   delete:
 *     summary: Eliminar un producto por código
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: codigo_producto
 *         schema:
 *           type: string
 *         required: true
 *         description: Código del producto
 *     responses:
 *       200:
 *         description: Producto eliminado
 *       404:
 *         description: Producto no encontrado
 */
router.delete('/:codigo_producto', productoController.deleteProducto);

module.exports = router;
