import { DataTypes } from 'sequelize';
import db from '../configs/database.js';

const Cuenta = db.define(
  'cuenta',
  {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      field: 'email',
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: { field: 'password', type: DataTypes.STRING, allowNull: false },
    role: { field: 'role', type: DataTypes.NUMBER, allowNull: false, defaultValue: '0' },
  },
  { tableName: 'cuenta', timestamps: false },
);

export default Cuenta;
