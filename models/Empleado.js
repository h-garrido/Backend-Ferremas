const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Empleado = sequelize.define('Empleado', {
    id_empleado: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    rut: {
        type: DataTypes.STRING
    },
    cargo: {
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
