import cuentaServicios from '../services/cuenta.service.js';

export const register = async (req, res) => {
  try {
    const token = await cuentaServicios.registrarCuenta(req.body);
    res.status(200).json({ mensaje: 'Cuenta creada con exito', token });
  } catch (err) {
    res.status(403).json({ mensaje: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const token = await cuentaServicios.LogearCuenta(req.body);

    res.status(200).json({ mensaje: 'logeado con exito', token });
  } catch (err) {
    res.status(403).json({ mensaje: err.message });
  }
};
