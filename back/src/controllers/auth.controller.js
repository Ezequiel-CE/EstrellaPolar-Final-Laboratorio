// import jwt from 'jsonwebtoken';
import User from '../models/User.model.js';

export const login = async (req, res) => {
  // verifica que el mail exista
  try {
    const cuenta = await User.findOne({ where: { mail: req.body.mail } });

    if (!cuenta) {
      return res.status(401).json({ msg: 'Usuario o contraseña inválida' });
    }

    // compara contraseña
    if (!(cuenta.contraseña === req.body.contraseña)) {
      console.log('contraseña incorrecta');
      return res.status(401).json({ msg: 'Usuario o contraseña inválida' });
    }

    return res.status(200).json({ msg: 'logeado com sucesso' });
  } catch (error) {
    // error en el endpoint
    return res.status(500).json({ msg: 'Error al logearse' });
  }
};

export const register = async (req, res) => {
  res.send('register route');
};
