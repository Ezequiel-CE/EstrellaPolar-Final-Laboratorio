import model from '../models/index.js';
import BodyPasaje from '../schemas/pasaje.schema.js';

const postPasaje = (body) => {
  const { error, value } = BodyPasaje(body);

  if (error) throw new Error(error);

  return model.Pasaje.create(value);
};

const getPasaje = async (id) => {
  const pasaje = await model.Pasaje.findOne({ where: { id } });
  if (!pasaje) {
    throw new Error('No se encontro pasaje');
  }
  return pasaje;
};

const servicio = { postPasaje, getPasaje };

export default servicio;
