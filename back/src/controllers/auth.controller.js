// import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { encontrarCuenta, crearCuenta } from '../services/cuenta.services.js';
import cuentaValidation from '../lib/validation.js';

export const register = async (req, res) => {
  // validation
  const { error, value } = cuentaValidation(req.body);

  if (error) {
    throw new Error('datos no coinciden con lo que se solicita');
  }

  try {
    // encuentra la cuenta
    encontrarCuenta(value.email);

    // hashea password y crea cuenta
    const hashedPassword = await bcrypt.hash(value.password, 8);

    await crearCuenta(value.email, hashedPassword);

    res.status(200).json({ mensaje: 'Cuenta creada con exito' });
  } catch (err) {
    res.status(403).json({ mensaje: err });
  }
};

export const login = async (req, res) => {
  // validation
  const { error, value } = cuentaValidation(req.body);

  if (error) {
    throw new Error('datos no coinciden con lo que se solicita');
  }

  try {
    // verifica que el mail exista
    const cuenta = await encontrarCuenta(value.email);

    if (!cuenta) {
      throw new Error('Usuario o contraseña inválida');
    }

    // compara cuentas
    const comparedPassword = await bcrypt.compare(value.password, cuenta.password);

    if (!comparedPassword) {
      throw new Error('Usuario o contraseña inválida');
    }

    // crea token

    const token = jwt.sign({ cuenta: value.email }, process.env.JWT_SECRET, {
      expiresIn: '2h',
    });

    return res.status(200).json({ mensaje: 'logeado con exito', token });
  } catch (err) {
    // error en el endpoint
    throw new Error('error en el endpoint');
  }
};
