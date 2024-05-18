const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Pedido = sequelize.define('Pedido', {
    id_pedido: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    numero_pedido: {
        type: DataTypes.INTEGER
    },
    fecha_pedido: {
        type: DataTypes.DATE
    },
    nombre_cliente: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'Pedido',
    timestamps: false
});

module.exports = Pedido;
