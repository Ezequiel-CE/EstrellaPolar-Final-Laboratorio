/* eslint-disable implicit-arrow-linebreak */
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Cuenta from '../models/cuenta.model.js';

export const registrarCuenta = async ({ email, password }) => {
  const cuenta = await Cuenta.findOne({ where: { email } });

  if (cuenta) throw new Error('Cuenta existe');

  const hashedPassword = await bcrypt.hash(password, 8);

  await Cuenta.create({
    email,
    password: hashedPassword,
  });
};

export const LogearCuenta = async ({ email, password }) => {
  // encuentra cuenta
  const cuenta = await Cuenta.findOne({ where: { email } });

  if (!cuenta) {
    throw new Error('Usuario o contraseña inválida');
  }

  // compara cuentas
  const comparedPassword = await bcrypt.compare(password, cuenta.password);

  if (!comparedPassword) {
    throw new Error('Usuario o contraseña inválida');
  }

  // crea token

  const token = jwt.sign({ cuenta: email }, process.env.JWT_SECRET, {
    expiresIn: '2h',
  });
  return token;
};
