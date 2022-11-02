import servicio from '../services/vuelo.service.js';

export const crearVuelo = async (_, res) => {
  try {
    const resp = await servicio.postVuelo(_.body);
    res.status(200).json({ resp });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const obtenerVuelo = async (_, res) => {
  const { id } = _.params;
  try {
    const resp = await servicio.getVuelo(id);
    res.status(200).json({ resp });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const obtenerVuelos = async (_, res) => {
  try {
    const resp = await servicio.getVuelos();
    res.status(200).json({ resp });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const editarVuelo = async (_, res) => {
  const { id } = _.params;
  const { body } = _;
  try {
    const resp = await servicio.patchVuelo({ id, body });

    res.status(200).json(!resp[0] ? 'NO hay nada que modificar' : 'oki');
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const destruirVuelo = async (_, res) => {
  const { id } = _.params;
  try {
    await servicio.deleteVuelo(id);

    res.status(200).json('Vuelo eliminado');
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const obtenerVuelosTratados = async (_, res) => {
  try {
    const resp = await servicio.getVuelosTratado();
    res.status(200).json({ resp });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
