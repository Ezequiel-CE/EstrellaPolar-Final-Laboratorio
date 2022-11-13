import model from '../models/index.js';
import validacionBodyPasajeroCompraPasaje from '../schemas/pasajero_compra_pasaje.schema.js';

const postPasajeroCompraPasaje = async (data) => {
  const { error, value } = validacionBodyPasajeroCompraPasaje(data);

  if (error) throw new Error(error);

  const exist = await model.PasajeroCompraPasaje.findOne({
    where: { id_pasajero: value.id_pasajero, id_vuelo_pasaje: value.id_vuelo_pasaje },
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

const patchPasajeroCompraPasaje = async (data) => {
  const pasajeEditado = await model.PasajeroCompraPasaje.update(
    { asiento: data.asiento },
    {
      where: {
        id: data.pasajeroCompraPasajeId,
      },
    },
  );

  return pasajeEditado;
};

const obtenerPasajesComprados = async (idVuelo) => {
  const pasajes = await model.PasajeroCompraPasaje.findAll({
    include: [
      {
        model: model.pasajeVuelo,
        where: { id_vuelo: idVuelo },
      },
    ],
  });

  return pasajes;
};

export default {
  postPasajeroCompraPasaje,
  getPasajeroCompraPasaje,
  getAllPasajeroCompraPasaje,
  obtenerPasajesComprados,
  patchPasajeroCompraPasaje,
};
