/** @format */

import { DataTypes } from 'sequelize';
import db from '../configs/database.js';

const Pasajero = db.define(
  'pasajero',
  {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: { field: 'nombre', type: DataTypes.STRING(30), allowNull: false },
    apellido: { field: 'apellido', type: DataTypes.STRING(30), allowNull: false },
    tipo_documento: { field: 'tipo_documento', type: DataTypes.STRING(30), allowNull: false },
    num_documento: { field: 'num_documento', type: DataTypes.STRING(20), allowNull: false },
    fecha_nacimiento: { field: 'fecha_nacimiento', type: DataTypes.DATEONLY, allowNull: false },
    telefono: { field: 'telefono', type: DataTypes.STRING(20), allowNull: false },
    direccion: { field: 'direccion', type: DataTypes.STRING(70), allowNull: false },
    email: { field: 'email', type: DataTypes.STRING(60), allowNull: false },
  },
  { tableName: 'pasajero', timestamps: false },
);

export default Pasajero;
