const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Empleado = sequelize.define('Empleado', {
    id_empleado: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre_empleado: {
        type: DataTypes.STRING
    },
    rut_empleado: {
        type: DataTypes.STRING
    },
    cargo_empleado: {
        type: DataTypes.ENUM('Bodeguero', 'Vendedor', 'Contador', 'Administrador')
    },
    usuario: {
        type: DataTypes.STRING
    },
    contraseña: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'Empleado',
    timestamps: false
});

module.exports = Empleado;
