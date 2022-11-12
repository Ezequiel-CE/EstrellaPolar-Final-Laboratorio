import servicio from '../services/avion.service.js';

export const crearAvion = async (_, res) => {
  try {
    const resp = await servicio.postAvion(_.body);
    return res.status(200).json({ resp });
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};

export const verAvion = async (_, res) => {
  const { id } = _.params;
  try {
    const resp = await servicio.getAvion(id);
    return res.status(200).json({ resp });
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};

export const verVuelosDelAvion = async (_, res) => {
  const { id } = _.params;
  try {
    const resp = await servicio.getVuelosByAvion(id);
    return res.status(200).json({ resp });
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};

export const getAsientosLibres = async (_, res) => {
  try {
    const resp = await servicio.getAsientosLibres();

    return res.status(200).json({ resp });
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};
