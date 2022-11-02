import model from '../models/index.js';
import validacionBodyPasajeroCompraPasaje from '../schemas/pasajero_compra_pasaje.schema.js';

const postPasajeroCompraPasaje = async (data) => {
  const { error, value } = validacionBodyPasajeroCompraPasaje(data);

  if (error) throw new Error(error);

  const exist = await model.PasajeroCompraPasaje.findOne({
    where: { id_pasajero: value.id_pasajero, id_pasaje: value.id_pasaje },
  });

  if (exist) throw new Error('pasaje ya fue comprado');

  return model.PasajeroCompraPasaje.create(value);
};

const getAllPasajeroCompraPasaje = async () => model.PasajeroCompraPasaje.findAll();

const getPasajeroCompraPasaje = async (id) => {
  const pasajecomprado = await model.PasajeroCompraPasaje.findOne({ where: { id } });
  if (!pasajecomprado) {
    throw new Error('No se pasaje comprado');
  }
  return pasajecomprado;
};

export default {
  postPasajeroCompraPasaje,
  getPasajeroCompraPasaje,
  getAllPasajeroCompraPasaje,
};
