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
  const { nombre, apellido, tipo_documento, num_documento } = data;

  const pasajeCompleto = await model.PasajeroCompraPasaje.findAll({
    include: [
      {
        where: { nombre, apellido, num_documento, tipo_documento },
        model: model.Pasajero,
      },
      {
        model: model.pasajeVuelo,
        include: [{ model: model.Pasaje }, { model: model.Vuelo }],
      },
    ],
    order: [['fecha', 'DESC']],
  });

  const pasajeFomat = pasajeCompleto.map((pasaje) => {
    const format = { fecha: pasaje.fecha,
      monto: pasaje.monto,
      asiento: pasaje.asiento,
      estado: pasaje.estado,
      pasajero: pasaje.pasajero,
      pasaje: pasaje.vuelo_pasaje.pasaje,
      vuelo: pasaje.vuelo_pasaje.vuelo,

    };

    return format;
  });

  return pasajeFomat;
};

const servicio = { postPasaje, getPasaje, encontrarPasaje };

export default servicio;
