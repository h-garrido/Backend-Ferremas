const Transaccion = require('../models/Transaccion');

exports.getAllTransacciones = async (req, res) => {
    try {
        const transacciones = await Transaccion.findAll();
        res.json(transacciones);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createTransaccion = async (req, res) => {
    try {
        const newTransaccion = await Transaccion.create(req.body);
        res.json(newTransaccion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getTransaccionById = async (req, res) => {
    try {
        const transaccion = await Transaccion.findByPk(req.params.id_transaccion);
        if (transaccion) {
            res.json(transaccion);
        } else {
            res.status(404).json({ error: 'Transacción no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateTransaccion = async (req, res) => {
    try {
        const updatedTransaccion = await Transaccion.update(req.body, {
            where: { id_transaccion: req.params.id_transaccion }
        });
        res.json(updatedTransaccion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteTransaccion = async (req, res) => {
    try {
        await Transaccion.destroy({
            where: { id_transaccion: req.params.id_transaccion }
        });
        res.json({ message: 'Transacción eliminada' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
