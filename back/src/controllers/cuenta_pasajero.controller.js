import cuentaPasajeroServicio from '../services/cuenta_pasajero.service.js';

export const crearRelacionCuentaPasajero = async (req, res) => {
  try {
    const response = await cuentaPasajeroServicio.postCuentaPasajero(req.body);
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const verRelacionesCuentaPasajero = async (req, res) => {
  try {
    const resp = await cuentaPasajeroServicio.getAllCuentaPasajero();
    res.status(200).json(resp);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const verRelacionCuentaPasajero = async (req, res) => {
  const { id } = req.params;
  try {
    const cuentaPasajero = await cuentaPasajeroServicio.getCuentaPasajero(id);
    res.status(200).json(cuentaPasajero);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
