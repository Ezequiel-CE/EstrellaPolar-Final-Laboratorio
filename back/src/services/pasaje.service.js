import model from '../models/index.js';
import Vuelo from '../models/vuelo.model.js';
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

const encontrarPasaje = async (data) => {
  const { nombre, apellido, tipo_documento, num_documento } = data;

  const pasajeCompleto = await model.PasajeroCompraPasaje.findAll({
    attributes: { exclude: ['id_vuelo_pasaje'] },
    include: [
      {
        where: { nombre, apellido, num_documento, tipo_documento },
        model: model.Pasajero,
      },
      {
        model: model.Vuelo,
        attributes: { exclude: ['tarifa'] },
      },
    ],
  });
  return pasajeCompleto;
};

const servicio = { postPasaje, getPasaje, encontrarPasaje };

export default servicio;
