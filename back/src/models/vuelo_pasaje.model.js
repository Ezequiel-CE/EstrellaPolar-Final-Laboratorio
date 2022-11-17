import { DataTypes } from 'sequelize';
import Vuelo from './vuelo.model.js';
import Pasaje from './pasaje.model.js';
import db from '../configs/database.js';

const VueloPasaje = db.define(
  'VueloPasaje',
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

export default VueloPasaje;
