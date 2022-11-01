import model from '../models/index.js';

const postAvionVuelo = async (body) => {
  const { avion, vuelo } = body;
  const exist = await model.AvionVuelo.findOne({
    where: { avion, vuelo },
  });

  if (exist) throw new Error('Ya esta programado');

  const avionVuelo = model.AvionVuelo.create(body);
  return avionVuelo;
};

const getAvionVuelo = async (id) => {
  const avionVuelo = await model.AvionVuelo.findByPk(id);

  if (!avionVuelo) {
    throw new Error('No se encontro Avion vuelo');
  }
  return avionVuelo;
};

const servicio = {
  postAvionVuelo,
  getAvionVuelo,
};
export default servicio;
