import servicio from '../services/pasaje_vuelo.service.js';

export const crearRelacionPasajeVuelo = async (_, res) => {
  try {
    const resp = await servicio.postPasajeVuelo(_.body);
    return res.status(200).json({ resp });
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};

export const verRelacionPasajeVuelo = async (_, res) => {
  const { id } = _.params;
  console.log(id);
  try {
    const resp = await servicio.getPasajeVuelo(id);
    return res.status(200).json({ resp });
  } catch (err) {
    console.log(err);
    return res.status(404).json({ message: err.message });
  }
};
