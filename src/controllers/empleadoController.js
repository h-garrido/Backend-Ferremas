const Empleado = require('../models/Empleado');

exports.getAllEmpleados = async (req, res) => {
    try {
        const empleados = await Empleado.findAll();
        res.json(empleados);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createEmpleado = async (req, res) => {
    try {
        const newEmpleado = await Empleado.create(req.body);
        res.json({message: "Empleado creado", newEmpleado});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getEmpleadoById = async (req, res) => {
    try {
        const empleado = await Empleado.findByPk(req.params.id_empleado);
        if (empleado) {
            res.json(empleado);
        } else {
            res.status(404).json({ error: 'Empleado no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateEmpleado = async (req, res) => {
    try {
        const updatedEmpleado = await Empleado.update(req.body, {
            where: { id_empleado: req.params.id_empleado }
        });
        res.json({message: "Empleado actualizado", updatedEmpleado});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteEmpleado = async (req, res) => {
    try {
        await Empleado.destroy({
            where: { id_empleado: req.params.id_empleado }
        });
        res.json({ message: 'Empleado eliminado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
