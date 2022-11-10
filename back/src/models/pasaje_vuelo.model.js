import { DataTypes } from 'sequelize';
import db from '../configs/database.js';
import Pasaje from './pasaje.model.js';
import Vuelo from './vuelo.model.js';

const pasajeVuelo = db.define(
  'vuelo',
  {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_vuelo: {
      field: 'id_vuelo',
      type: DataTypes.INTEGER,

      references: {
        model: Vuelo,
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    },
    id_pasaje: {
      field: 'id_pasaje',
      type: DataTypes.INTEGER,

      references: {
        model: Pasaje,
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    },
  },
  { tableName: 'vuelo_pasaje', timestamps: false },
);
export default pasajeVuelo;
