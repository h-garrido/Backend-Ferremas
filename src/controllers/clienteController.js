const Cliente = require('../models/Cliente');

exports.getAllClientes = async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createCliente = async (req, res) => {
    try {
        const newCliente = await Cliente.create(req.body);
        res.json({message: "Cliente creado", newCliente});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getClienteById = async (req, res) => {
    try {
        const cliente = await Cliente.findByPk(req.params.id_cliente);
        if (cliente) {
            res.json(cliente);
        } else {
            res.status(404).json({ error: 'Cliente no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateCliente = async (req, res) => {
    try {
        const updatedCliente = await Cliente.update(req.body, {
            where: { id_cliente: req.params.id_cliente }
        });
        res.json({message: "Cliente actualizado", updatedCliente});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteCliente = async (req, res) => {
    try {
        await Cliente.destroy({
            where: { id_cliente: req.params.id_cliente }
        });
        res.json({ message: 'Cliente eliminado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
