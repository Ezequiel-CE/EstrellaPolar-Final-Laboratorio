// import jwt from 'jsonwebtoken';
import Cuenta from '../models/Cuenta.model.js';

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
    console.log(error);
    // error en el endpoint
    return res.status(500).json({ msg: 'Error al logearse' });
  }
};

export const register = async (req, res) => {
  res.send('register route');
};
