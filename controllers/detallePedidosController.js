const DetallePedido = require('../models/DetallePedidos')

exports.getAllDetallePedidos = async (req, res) => {
    try {
        const detallePedidos = await DetallePedido.findAll()
        res.json(detallePedidos);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

/* exports.addProductoDetallePedidos = async (req, res) => {
    try {
        const { id_pedido, codigo_producto, cantidad } = req.body;
        const detallePedido = await DetallePedido.create({ id_pedido, codigo_producto, cantidad });
        res.json({message: "Producto agregado a pedido", detallePedido});
    } catch (error) {
        res.status(500).send('Error al añadir producto al pedido' + error.message);
    }
};

exports.updateDetallePedidos = async (req, res) => {
    try {
        const { id_pedido, codigo_producto, cantidad } = req.body;
        const detallePedido = await DetallePedido.update({ cantidad }, { 
            where: { 
                id_pedido, 
                codigo_producto 
            } 
        });
        res.json({message: "Producto actualizado", detallePedido});
    } catch (error) {
        res.status(500).send('Error al actualizar producto' + error.message);
    }
}; */

exports.deleteDetallePedidos = async (req, res) => {
    try {
        const { id_pedido, codigo_producto } = req.body;
        const detallePedido = await DetallePedido.destroy({
            where: {
                id_pedido,
                codigo_producto
            }
        });
        res.json({message: "Producto eliminado", detallePedido});
    } catch (error) {
        res.status(500).send('Error al eliminar producto' + error.message);
    }
};