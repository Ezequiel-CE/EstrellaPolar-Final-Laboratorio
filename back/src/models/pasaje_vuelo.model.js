/** @format */

import { DataTypes } from 'sequelize';
import db from '../configs/database.js';
import Vuelo from './vuelo.model.js';
import Pasaje from './pasaje.model.js';

const PasajeVuelo = db.define(
  'pasaje_vuelo',
  {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    vuelo: {
      field: 'id_vuelo',
      type: DataTypes.INTEGER,
      references: {
        model: Vuelo,
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    },
    pasaje: {
      field: 'id_pasaje',
      type: DataTypes.INTEGER,
      references: {
        model: Pasaje,
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    },
    fecha: {
      field: 'fecha',
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW,
    },
    estado: { field: 'estado', type: DataTypes.STRING(60), allowNull: false },
  },
  { tableName: 'pasaje_vuelo', timestamps: false },
);

export default PasajeVuelo;
