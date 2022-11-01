import sequelize, { DataTypes } from 'sequelize';
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
    id_pasajero: {
      field: 'id_pasajero',
      type: DataTypes.INTEGER,

      references: {
        model: Pasajero,
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
    fecha: {
      field: 'fecha',
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: sequelize.NOW,
    },
    monto: { field: 'monto', type: DataTypes.DECIMAL(10, 2) },
  },
  { tableName: 'pasajero_compra_pasaje', timestamps: false },
);

export default PasajeroCompraPasaje;
