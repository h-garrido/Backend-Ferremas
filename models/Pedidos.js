const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Pedidos = sequelize.define('Pedidos', {
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
    id_cliente: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Cliente',
            key: 'id_cliente'
        },
        onDelete: 'CASCADE'
    },
    id_empleado: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Empleado',
            key: 'id_empleado'
        },
        onDelete: 'SET NULL'
    }
}, {
    tableName: 'Pedidos',
    timestamps: false
});

module.exports = Pedidos;

