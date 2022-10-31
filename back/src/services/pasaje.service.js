import Pasaje from '../models/pasaje.model.js';
import BodyPasaje from '../schemas/pasaje.schema.js';

const postPasaje = (body) => {
  const { error, value } = BodyPasaje(body);

  if (error) throw new Error(error);

  return Pasaje.create(value);
};

const getPasaje = async (id) => {
  const pasaje = await Pasaje.findOne({ where: { id } });
  if (!pasaje) {
    throw new Error('No se encontro pasaje');
  }
  return pasaje;
};

const servicio = { postPasaje, getPasaje };

export default servicio;
