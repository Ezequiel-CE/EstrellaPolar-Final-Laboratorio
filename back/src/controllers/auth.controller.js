// import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import Cuenta, { encontrarCuenta, crearCuenta } from '../models/cuenta.model.js';
import cuentaValidation from '../lib/validation.js';

export const register = async (req, res) => {
  // validation
  const { error, value } = cuentaValidation(req.body);

  if (error) {
    throw new Error('datos no coinciden con lo que se solicita');
  }

  try {
    const cuenta = await encontrarCuenta(value.email);

    if (cuenta) {
      throw new Error('cuenta ya exista');
    }

    const hashedPassword = await bcrypt.hash(value.password, 8);

    const nuevaCuenta = await crearCuenta(value.email, hashedPassword);

    res.status(200).json({ mensaje: 'Cuenta creada con exito', nuevaCuenta });
  } catch (err) {
    throw new Error('error en el endpoint');
  }
};

export const login = async (req, res) => {
  // verifica que el mail exista
  try {
    const cuenta = await Cuenta.findOne({ where: { email: req.body.email } });

    if (!cuenta) {
      return res.status(401).json({ msg: 'Usuario o contraseña inválida' });
    }

    // compara contraseña
    if (!(cuenta.contraseña === req.body.contraseña)) {
      console.warn('contraseña incorrecta');
      return res.status(401).json({ msg: 'Usuario o contraseña inválida' });
    }

    return res.status(200).json({ msg: 'logeado com sucesso' });
  } catch (error) {
    // error en el endpoint
    return res.status(500).json({ msg: 'Error al logearse' });
  }
};
