const Rol = require('../models/Rol');

exports.getAllRols = async (req, res) => {
    try {
        const rols = await Rol.findAll();
        res.json(rols);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.getRolById = async (req, res) => {
    try {
        const rol = await Rol.findByPk(req.params.id_rol);
        if (rol) {
            res.json(rol);
        } else {
            res.status(404).json({ error: 'Rol no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createRol = async (req, res) => {
    try {
        const newRol = await Rol.create(req.body);
        res.json({message: "Rol creado", newRol});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateRol = async (req, res) => {
    try {
        const updateRol = await Rol.update(req.body, {
            where: { id_rol: req.params.id_rol }
        });
        res.json({message: "Rol actualizado", updateRol});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteRol = async (req, res) => {
    try {
        await Rol.destroy({
            where: { id_rol: req.params.id_rol }
        });
        res.json({ message: 'Rol eliminado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};