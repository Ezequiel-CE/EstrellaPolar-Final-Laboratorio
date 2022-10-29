/* eslint-disable implicit-arrow-linebreak */
import Cuenta from '../models/cuenta.model.js';

export const encontrarCuenta = (email) => {
  const cuenta = Cuenta.findOne({ where: { email } });
  if (cuenta) throw new Error('Cuenta existe');
  return cuenta;
};
export const crearCuenta = (email, password) =>
  Cuenta.create({
    email,
    password,
  });
