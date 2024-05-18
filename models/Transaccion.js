const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Transaccion = sequelize.define('Transaccion', {
    id_transaccion: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    importe: {
        type: DataTypes.DECIMAL(10, 2)
    },
    nombre_cliente: {
        type: DataTypes.STRING
    },
    fecha: {
        type: DataTypes.DATE
    },
    numero_pedido: {
        type: DataTypes.INTEGER
    },
    tipo_pago: {
        type: DataTypes.ENUM('Debito', 'Credito', 'Transferencia')
    }
}, {
    tableName: 'Transaccion',
    timestamps: false
});

module.exports = Transaccion;
