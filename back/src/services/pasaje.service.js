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

const encontrarPasaje = async (data) => {
  const { nombre, apellido, tipo_documento, numero_documento } = data;

  const pasajeCompleto = await model.Pasajero.findAll({
    where: { nombre, apellido, num_documento: numero_documento },
    include: [
      {
        required: true,
        model: model.PasajeroCompraPasaje,
      },
    ],
  });

  return pasajeCompleto;
};

const servicio = { postPasaje, getPasaje, encontrarPasaje };

export default servicio;
