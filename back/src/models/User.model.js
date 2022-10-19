import { DataTypes } from 'sequelize';
import db from '../configs/database.js';

const User = db.define(
  'user',
  {
    id: {
      field: 'id_usuario',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    mail: { field: 'mail', type: DataTypes.STRING },
    contraseña: { field: 'contraseña', type: DataTypes.STRING },
  },
  { tableName: 'Usuario', timestamps: false },
);

export default User;
