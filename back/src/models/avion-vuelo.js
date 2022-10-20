import { DataTypes } from 'sequelize';
import db from '../configs/database.js';
import Vuelo from './vuelo.model.js';
import Avion from './avion.model.js';

const AvionVuelo = db.define(
  'avion_vuelo',
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
      allowNull: false,
      references: {
        model: Vuelo,
        key: 'id',
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
    },
    id_avion: {
      field: 'id_avion',
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Avion,
        key: 'id',
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
    },

    observacion: { field: 'observacion', type: DataTypes.STRING(60), allowNull: false },
  },
  { tableName: 'avion_vuelo', timestamps: false },
);

export default AvionVuelo;
