import cuentaServicios from '../services/cuenta.service.js';

export const register = async (req, res) => {
  try {
    const data = await cuentaServicios.registrarCuenta(req.body);
    res.status(200).json({ mensaje: 'Cuenta creada con exito', data });
  } catch (err) {
    console.log(err);
    res.status(403).json({ mensaje: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const data = await cuentaServicios.LogearCuenta(req.body);

    res.status(200).json({ mensaje: 'logeado con exito', data });
  } catch (err) {
    console.log(err);
    res.status(403).json({ mensaje: err.message });
  }
};
