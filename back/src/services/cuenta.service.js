/* eslint-disable implicit-arrow-linebreak */
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import model from '../models/index.js';
import cuentaValidation from '../schemas/cuenta.schema.js';

const registrarCuenta = async (data) => {
  const { error, value } = cuentaValidation(data);

  if (error) {
    throw new Error(error);
  }
  const cuenta = await model.Cuenta.findOne({ where: { email: value.email } });

  if (cuenta) throw new Error('Cuenta existe');

  const hashedPassword = await bcrypt.hash(value.password, 8);

  const cuentaCreada = await model.Cuenta.create({
    email: value.email,
    password: hashedPassword,
  });

  // crea token

  const token = jwt.sign({ cuenta: value.email, role: cuentaCreada.role }, process.env.JWT_SECRET, {
    expiresIn: '2h',
  });

  return { token, role: cuentaCreada.role };
};

const LogearCuenta = async (data) => {
  const { error, value } = cuentaValidation(data);

  if (error) {
    throw new Error(error);
  }
  // encuentra cuenta
  const cuenta = await model.Cuenta.findOne({ where: { email: value.email } });

  if (!cuenta) throw new Error('Usuario o contraseña inválida');

  // compara cuentas
  const comparedPassword = await bcrypt.compare(value.password, cuenta.password);

  if (!comparedPassword) throw new Error('Usuario o contraseña inválida');

  // crea token

  const token = jwt.sign({ cuenta: value.email, role: cuenta.role }, process.env.JWT_SECRET, {
    expiresIn: '2h',
  });

  return { token, role: cuenta.role };
};

export default { registrarCuenta, LogearCuenta };
