import sequelize, { DataTypes } from 'sequelize';
import db from '../configs/database.js';
import Pasajero from './pasajero.model.js';
import Vuelo from './vuelo.model.js';

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
    fecha: {
      field: 'fecha',
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: sequelize.NOW,
    },
    monto: { field: 'monto', type: DataTypes.DECIMAL(10, 2) },
    asiento: { field: 'asiento', type: DataTypes.STRING(60), allowNull: false },
    estado: { field: 'estado', type: DataTypes.STRING(60) },
  },
  { tableName: 'pasajero_compra_pasaje', timestamps: false },
);

export default PasajeroCompraPasaje;
