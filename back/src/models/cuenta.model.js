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
  },
  { tableName: 'cuenta', timestamps: false },
);

export const encontrarCuenta = async (email) => Cuenta.findOne({ where: { email } });
export const crearCuenta = async (email, password) => Cuenta.create({
  email,
  password,
});
export default Cuenta;
