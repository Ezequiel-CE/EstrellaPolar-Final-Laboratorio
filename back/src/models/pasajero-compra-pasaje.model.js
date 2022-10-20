/** @format */

import { DataTypes } from 'sequelize';
import db from '../configs/database.js';
import Pasajero from './pasajero.model.js';
import Pasaje from './pasaje.model.js';

const PasajeroCompraPasaje = db.define(
  'pasajero_compra_pasaje',
  {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_vuelo: {
      field: 'id_pasajero',
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Pasajero,
        key: 'id',
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
    },
    id_pasaje: {
      field: 'id_pasaje',
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Pasaje,
        key: 'id',
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
    },
    fecha: { field: 'fecha', type: DataTypes.DATEONLY, allowNull: false },
    monto: { field: 'monto', type: DataTypes.DECIMAL(10, 2), allowNull: false },
  },
  { tableName: 'pasajero_compra_pasaje', timestamps: false },
);

export default PasajeroCompraPasaje;
