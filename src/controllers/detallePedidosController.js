const DetallePedido = require('../models/DetallePedidos')

exports.getAllDetallePedidos = async (req, res) => {
    try {
        const detallePedidos = await DetallePedido.findAll()
        res.json(detallePedidos);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

exports.getDetallePedidoById = async (req, res) => {
    try {
        const detallePedido = await DetallePedido.findByPk(req.params.id_pedido)
        if (!detallePedido) {
            res.status(404).json({message: 'Detalle de pedido no encontrado'});
        } else {
            res.json(detallePedido);
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

exports.createDetallePedidos = async (req, res) => {
    try {
        const newDetallePedido = await DetallePedido.create(req.body)
        res.json({message: "Detalle de pedido creado", newDetallePedido});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

exports.updateDetallePedidos = async (req, res) => {
    try {
        const { id_pedido, codigo_producto } = req.body;
        const updateDetallePedidos = DetallePedido.update(req.body, {
            where: { id_pedido,
                     codigo_producto
             }
        });
        res.json({message: "Detalle de pedido actualizado", updateDetallePedidos});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};
 
exports.deleteDetallePedidos = async (req, res) => {
    try {
        const { id_pedido, codigo_producto } = req.body;
        const detallePedido = await DetallePedido.destroy({
            where: {
                id_pedido,
                codigo_producto
            }
        });
        res.json({message: "Detalle de pedido eliminado", detallePedido});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};