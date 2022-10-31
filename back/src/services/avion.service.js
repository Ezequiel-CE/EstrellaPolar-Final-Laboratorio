import Avion from '../models/avion.model.js';
import BodyAvion from '../schemas/avion.schema.js';

const postAvion = (body) => {
  const { error, value } = BodyAvion(body);

  if (error) throw new Error(error);

  return Avion.create(value);
};

const getAvion = async (id) => {
  const avion = await Avion.findOne({ where: { id } });
  if (!avion) {
    throw new Error('No se encontro avion');
  }
  return avion;
};

const servicio = { postAvion, getAvion };
export default servicio;
