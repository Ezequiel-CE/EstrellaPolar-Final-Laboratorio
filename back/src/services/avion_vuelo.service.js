import AvionVuelo from '../models/avion_vuelo.model.js';
// import Avion from '../models/avion.model.js';
// import Vuelo from '../models/vuelo.model.js';

const postAvionVuelo = async (body) => {
  const { avion, vuelo } = body;
  const exist = await AvionVuelo.findOne({
    where: { avion, vuelo },
  });

  if (exist) throw new Error('Ya esta programado');

  const avionVuelo = AvionVuelo.create(body);
  return avionVuelo;
};

const getAvionVuelo = async (id) => {
  const avionVuelo = await AvionVuelo.findOne({ where: { id } });
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
