import { DataTypes } from 'sequelize';
import db from '../configs/database.js';
import Cuenta from './cuenta.model.js';
import Pasajero from './pasajero.model.js';

const CuentaPasajero = db.define(
  'cuenta_pasajero',
  {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_cuenta: {
      field: 'id_cuenta',
      type: DataTypes.INTEGER,

      references: {
        model: Cuenta,
        key: 'id_cuenta',
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
    },
    id_pasajero: {
      field: 'id_pasajero',
      type: DataTypes.INTEGER,

      references: {
        model: Pasajero,
        key: 'id_pasajero',
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
    },
    puntos: { field: 'puntos', type: DataTypes.INTEGER, allowNull: false },
  },
  { tableName: 'cuenta', timestamps: false },
);

export default CuentaPasajero;
