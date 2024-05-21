const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Producto = sequelize.define('Producto', {
    codigo_producto: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    marca: {
        type: DataTypes.STRING
    },
    nombre: {
        type: DataTypes.STRING
    },
    fecha: {
        type: DataTypes.DATE
    },
    valor: {
        type: DataTypes.DECIMAL(10, 2)
    },
    tipo_herramienta: {
        type: DataTypes.JSON
    }
}, {
    tableName: 'Producto',
    timestamps: false
});

module.exports = Producto;
