import servicio from '../services/pasaje.service.js';

export const crearPasaje = async (_, res) => {
  try {
    const resp = await servicio.postPasaje(_.body);
    return res.status(200).json({ resp });
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};

export const VerPasaje = async (_, res) => {
  const { id } = _.params;

  try {
    const resp = await servicio.getPasaje(id);
    return res.status(200).json({ resp });
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};
