const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cliente = sequelize.define('Cliente', {
    id_cliente: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre_cliente: {
        type: DataTypes.STRING
    },
    correo_electronico: {
        type: DataTypes.STRING
    },
    contraseña: {
        type: DataTypes.STRING
    },
    domicilio: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'Cliente',
    timestamps: false
});

module.exports = Cliente;
