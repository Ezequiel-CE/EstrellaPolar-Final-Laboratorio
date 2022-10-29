import Cuenta from '../models/cuenta.model.js';

export const encontrarCuenta = async (email) => Cuenta.findOne({ where: { email } });
export const crearCuenta = async (email, password) => Cuenta.create({
  email,
  password,
});
