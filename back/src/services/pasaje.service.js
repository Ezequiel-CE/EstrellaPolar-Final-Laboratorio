/* eslint-disable camelcase */
import model from '../models/index.js';
import BodyPasaje from '../schemas/pasaje.schema.js';

const postPasaje = (body) => {
  const { error, value } = BodyPasaje(body);

  if (error) throw new Error(error);

  return model.Pasaje.create(value);
};

const getPasaje = async (id) => {
  const pasajeCompleto = await model.PasajeroCompraPasaje.findOne({
    include: [
      {
        where: { id },
        model: model.Pasajero,
      },
      {
        model: model.pasajeVuelo,
        include: [{ model: model.Pasaje }, { model: model.Vuelo }],
      },
    ],
    order: [['fecha', 'DESC']],
  });

  return pasajeCompleto;
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

const encontrarPasajePorCuenta = async (cuenta) => {
  const pasajeros = await model.CuentaPasajero.findAll({
    include: [
      {
        where: { id: cuenta.id },
        model: model.Cuenta,
      },
      {
        model: model.Pasajero,
      },
    ],
  });

  return pasajeros;
};

const servicio = { postPasaje, getPasaje, encontrarPasaje, encontrarPasajePorCuenta };

export default servicio;
