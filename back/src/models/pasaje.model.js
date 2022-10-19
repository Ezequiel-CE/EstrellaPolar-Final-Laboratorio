/** @format */

import { DataTypes } from 'sequelize';
import db from '../configs/database.js';

const Pasaje = db.define(
  'pasaje',
  {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    costo: { field: 'costo', type: DataTypes.DECIMAL(10, 2), allowNull: false },
    categoria: { field: 'categoria', type: DataTypes.STRING(60), allowNull: false },
    asiento: { field: 'asiento', type: DataTypes.STRING(60), allowNull: false },
  },
  { tableName: 'pasaje', timestamps: false },
);

export default Pasaje;
