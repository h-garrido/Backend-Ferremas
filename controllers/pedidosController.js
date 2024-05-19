const Pedido = require('../models/Pedidos');

exports.getAllPedidos = async (req, res) => {
    try {
        const pedidos = await Pedido.findAll();
        res.json(pedidos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createPedido = async (req, res) => {
    try {
        const newPedido = await Pedido.create(req.body);
        res.json(newPedido);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getPedidoById = async (req, res) => {
    try {
        const pedido = await Pedido.findByPk(req.params.id_pedido);
        if (pedido) {
            res.json(pedido);
        } else {
            res.status(404).json({ error: 'Pedido no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updatePedido = async (req, res) => {
    try {
        const updatedPedido = await Pedido.update(req.body, {
            where: { id_pedido: req.params.id_pedido }
        });
        res.json(updatedPedido);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deletePedido = async (req, res) => {
    try {
        await Pedido.destroy({
            where: { id_pedido: req.params.id_pedido }
        });
        res.json({ message: 'Pedido eliminado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
