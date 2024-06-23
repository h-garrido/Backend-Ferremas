const EmpleadoRol = require('../models/EmpleadoRol');

exports.getAllEmpleadoRols = async (req, res) => {
    try {
        const empleadoRols = await EmpleadoRol.findAll();
        res.json(empleadoRols);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getEmpleadoRolById = async (req, res) => {
    try {
        const empleadoRol = await EmpleadoRol.findByPk(req.params.id_empleado);
        if (empleadoRol) {
            res.json(empleadoRol);
        } else {
            res.status(404).json({ message: 'EmpleadoRol no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createEmpleadoRol = async (req, res) => {
    try {
        const newEmpleadoRol = await EmpleadoRol.create(req.body);
        res.json({message: "EmpleadoRol creado", newEmpleadoRol});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateEmpleadoRol = async (req, res) => {
    try {
        const {id_empleado, id_rol} = req.body;
        const updateEmpleadoRol =await EmpleadoRol.update(req.body, {
            where: { id_empleado,
                    id_rol
             }
        });
        res.json({message: "EmpleadoRol actualizado", updateEmpleadoRol});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteEmpleadoRol = async (req, res) => {
    try {
        await EmpleadoRol.destroy({
            where: { id_empleado: req.params.id_empleado }
        });
        res.json({ message: 'EmpleadoRol eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};