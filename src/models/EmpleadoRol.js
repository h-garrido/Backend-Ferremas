const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Empleado = require('./Empleado');
const Rol = require('./Rol');

const EmpleadoRol = sequelize.define('EmpleadoRol', {
    id_empleado: {
        type: DataTypes.INTEGER,
        references: {
            model: Empleado,
            key: 'id_empleado'
        }
    },
    id_rol: {
        type: DataTypes.INTEGER,
        references: {
            model: Rol,
            key: 'id_rol'
        }
    }
}, {
    timestamps: false,
    tableName: 'EmpleadoRol'
});

Empleado.belongsToMany(Rol, { through: EmpleadoRol, foreignKey: 'id_empleado', otherKey: 'id_rol' });
Rol.belongsToMany(Empleado, { through: EmpleadoRol, foreignKey: 'id_rol', otherKey: 'id_empleado'});

module.exports = EmpleadoRol;