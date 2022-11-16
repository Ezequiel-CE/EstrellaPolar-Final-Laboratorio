import serviciosPasajero from '../services/pasajero.service.js';

export const obtenerPasajeros = async (_, res) => {
  try {
    const pasajeros = await serviciosPasajero.getPasajeros();
    res.status(200).json(pasajeros);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const obtenerPasajero = async (req, res) => {
  const { id } = req.params;

  try {
    const pasajero = await serviciosPasajero.getPasajero(id);
    res.status(200).json(pasajero);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const crearPasajero = async (req, res) => {
  try {
    await serviciosPasajero.postPasajero(req.body);
    res.status(200).json({ message: 'se creo pasajero correctamente' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const editarPasajero = async (req, res) => {
  const { id } = req.params;
  try {
    await serviciosPasajero.patchPasajero(id, req.body);
    res.status(200).json({ message: 'se edito pasajero correctamente' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const eliminarPasajero = async (req, res) => {
  const { id } = req.params;
  try {
    await serviciosPasajero.deletePasajero(id);
    res.status(200).json({ message: 'se borro pasajero correctamente' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const comprarPasaje = async (req, res) => {
  try {
    const resp = await serviciosPasajero.comprarPasaje(req.body);
    res.status(200).json({ message: 'se compro pasaje', resp });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

export const cambiarPasaje = async (req, res) => {
  try {
    await serviciosPasajero.cambiarPasaje(req.body);
    res.status(200).json({ message: 'se cambio pasaje' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
