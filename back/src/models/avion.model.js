import { DataTypes } from 'sequelize';
import db from '../configs/database.js';

const Avion = db.define(
  'avion',
  {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    aerolinea: { field: 'aerolinea', type: DataTypes.STRING(60), allowNull: false },
    capacidad: { field: 'capacidad', type: DataTypes.INTEGER(60), allowNull: false },
  },
  { tableName: 'avion', timestamps: false },
);
export default Avion;
