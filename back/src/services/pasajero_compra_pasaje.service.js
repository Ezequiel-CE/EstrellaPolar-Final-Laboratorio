import PasajeroCompraPasaje from '../models/pasajero_compra_pasaje.model.js';
import validacionBodyPasajeroCompraPasaje from '../schemas/pasajero_compra_pasaje.schema.js';

const postPasajeroCompraPasaje = async (data) => {
  const { error, value } = validacionBodyPasajeroCompraPasaje(data);

  if (error) throw new Error(error);

  const exist = await PasajeroCompraPasaje.findOne({
    where: { id_pasajero: value.id_pasajero, id_pasaje: value.id_pasaje },
  });

  if (exist) throw new Error('pasaje ya fue comprado');

  return PasajeroCompraPasaje.create(value);
};

const getAllPasajeroCompraPasaje = async () => PasajeroCompraPasaje.findAll();

const getPasajeroCompraPasaje = async (id) => {
  const pasajecomprado = await PasajeroCompraPasaje.findOne({ where: { id } });
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
