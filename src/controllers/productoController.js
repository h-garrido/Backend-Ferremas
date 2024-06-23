const Producto = require('../models/Producto');

exports.getAllProductos = async (req, res) => {
    try {
        const productos = await Producto.findAll();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createProducto = async (req, res) => {
    try {
        const newProducto = await Producto.create(req.body);
        res.json({message: "Producto creado", newProducto});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getProductoById = async (req, res) => {
    try {
        const producto = await Producto.findByPk(req.params.codigo_producto);
        if (producto) {
            res.json(producto);
        } else {
            res.status(404).json({ error: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateProducto = async (req, res) => {
    try {
        const updatedProducto = await Producto.update(req.body, {
            where: { codigo_producto: req.params.codigo_producto }
        });
        res.json({message: "Producto actualizado", updatedProducto});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteProducto = async (req, res) => {
    try {
        await Producto.destroy({
            where: { codigo_producto: req.params.codigo_producto }
        });
        res.json({ message: 'Producto eliminado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
