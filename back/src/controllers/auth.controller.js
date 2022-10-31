// import jwt from 'jsonwebtoken';
import { LogearCuenta, registrarCuenta } from '../services/cuenta.services.js';
import cuentaValidation from '../lib/validation.js';

export const register = async (req, res) => {
  // validation
  const { error, value } = cuentaValidation(req.body);

  try {
    if (error) {
      throw new Error('mal request body');
    }

    await registrarCuenta(value);
    res.status(200).json({ mensaje: 'Cuenta creada con exito' });
  } catch (err) {
    res.status(403).json({ mensaje: err.message });
  }
};

export const login = async (req, res) => {
  // validation
  try {
    const { error, value } = cuentaValidation(req.body);

    if (error) {
      throw new Error('mal request body');
    }

    const token = await LogearCuenta(value);

    res.status(200).json({ mensaje: 'logeado con exito', token });
  } catch (err) {
    // error en el endpoint
    res.status(403).json({ mensaje: err.message });
  }
};
