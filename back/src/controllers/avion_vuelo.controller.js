import servicio from '../services/avion_vuelo.service.js';

export const crearRelacionAvionVuelo = async (_, res) => {
  try {
    const resp = await servicio.postAvionVuelo(_.body);
    return res.status(200).json({ resp });
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};

export const verRelacionAvionVuelo = async (_, res) => {
  const { id } = _.params;
  try {
    const resp = await servicio.getAvionVuelo(id);
    return res.status(200).json({ resp });
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};
