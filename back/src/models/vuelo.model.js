import { DataTypes } from 'sequelize';
import db from '../configs/database.js';

const Vuelo = db.define(
  'vuelo',
  {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    tarifa: { field: 'tarifa', type: DataTypes.DECIMAL(10, 2), allowNull: false },
    destino: { field: 'destino', type: DataTypes.STRING(60), allowNull: false },
    origen: { field: 'origen', type: DataTypes.STRING(60), allowNull: false },
    fecha: {
      field: 'fecha',
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    // id_pasaje: {
    //   field: 'id_pasaje',
    //   type: DataTypes.INTEGER,

    //   references: {
    //     model: Pasaje,
    //     key: 'id',
    //   },
    //   onUpdate: 'CASCADE',
    //   onDelete: 'RESTRICT',
    // },
  },
  { tableName: 'vuelo', timestamps: false },
);
export default Vuelo;
