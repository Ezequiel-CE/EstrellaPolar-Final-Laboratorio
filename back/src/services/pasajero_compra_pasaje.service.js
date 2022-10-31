import PasajeroCompraPasaje from '../models/pasajero_compra_pasaje.model.js';
import validacionBodyPasajeroCompraPasaje from '../schemas/pasajero_compra_pasaje.schema.js';

const postPasajeroCompraPasaje = async (data) => {
  const { error, value } = validacionBodyPasajeroCompraPasaje(data);

  if (error) throw new Error(error);

  const exist = await PasajeroCompraPasaje.findOne({
    where: { id_pasajero: value.id_pasajero, id_pasaje: value.id_pasaje },
  });

  if (exist) throw new Error('pasaje ya fue comprado');

  const pasajeComprado = PasajeroCompraPasaje.create(value);
  return pasajeComprado;
};

const getPasajeroCompraPasaje = async () => {
  //   const avionVuelo = await AvionVuelo.findOne({ where: { id } });
  //   if (!avionVuelo) {
  //     throw new Error('No se encontro Avion vuelo');
  //   }
  //   return avionVuelo;
};

const servicio = {
  postPasajeroCompraPasaje,
  getPasajeroCompraPasaje,
};
export default servicio;
