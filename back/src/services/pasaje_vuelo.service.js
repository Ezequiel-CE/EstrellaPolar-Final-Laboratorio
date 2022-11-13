import model from '../models/index.js';

const postPasajeVuelo = async (body) => {
  const { vuelo, pasaje } = body;
  const exist = await model.PasajeVuelo.findOne({
    where: { vuelo, pasaje },
  });

  if (exist) throw new Error('Ya se encuentra el pasaje en este vuelo');

  const avionVuelo = model.PasajeVuelo.create(body);
  return avionVuelo;
};

const getPasajeVuelo = async (id) => {
  const pasajeVuelo = await model.PasajeVuelo.findOne({ where: { id } });
  if (!pasajeVuelo) {
    throw new Error('No se encontro pasaje vuelo');
  }
  return pasajeVuelo;
};

const servicio = {
  postPasajeVuelo,
  getPasajeVuelo,
};
export default servicio;
