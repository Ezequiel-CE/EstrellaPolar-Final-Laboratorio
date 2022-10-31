import serviciosPasajero from '../services/pasajero.service.js';

export const obtenerPasajeros = async (_, res) => {
  try {
    const pasajeros = await serviciosPasajero.getPasajeros();
    res.status(200).json(pasajeros);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const obtenerPasajero = (req, res) => {
  res.status(200).send('envio de pasajero');
};

export const crearPasajero = async (req, res) => {
  try {
    await serviciosPasajero.postPasajero(req.body);
    res.status(200).json({ message: 'se creo pasajero correctamente' });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const editarPasajero = (req, res) => {
  res.status(200).send('editar de pasajeros');
};

export const eliminarPasajero = (req, res) => {
  res.status(200).send('borrar de pasajeros');
};
