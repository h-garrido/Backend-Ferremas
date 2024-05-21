const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Pedidos = require('./Pedidos');
const Producto = require('./Producto');

const DetallePedidos = sequelize.define('DetallePedidos', {
    id_pedido: {
        type: DataTypes.INTEGER,
        references: {
            model: Pedidos,
            key: 'id_pedido'
        }
    },
    codigo_producto: {
        type: DataTypes.STRING,
        references: {
            model: Producto,
            key: 'codigo_producto'
        }
    },
    cantidad: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'DetallePedidos',
    timestamps: false
});

Producto.belongsToMany(Pedidos, { through: DetallePedidos });
Pedidos.belongsToMany(Producto, { through: DetallePedidos });

module.exports = DetallePedidos;
