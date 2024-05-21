const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Transaccion = sequelize.define(
  "Transaccion",
  {
    id_transaccion: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    importe: {
      type: DataTypes.DECIMAL(10, 2),
    },
    id_pedido: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Pedidos",
        key: "id_pedido",
      },
      onDelete: "CASCADE",
    },
    fecha: {
      type: DataTypes.DATE,
    },
    tipo_pago: {
      type: DataTypes.ENUM("Debito", "Credito", "Transferencia"),
    },
  },
  {
    tableName: "Transaccion",
    timestamps: false,
  }
);

module.exports = Transaccion;
