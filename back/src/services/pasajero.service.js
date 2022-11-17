import model from '../models/index.js';
import {
  validacionBodyPasajero,
  validacionBodyPasajeroEdicion,
} from '../schemas/pasajero.schema.js';
import cuentaPasajerServicio from './cuenta_pasajero.service.js';
import pasajeroCompraPasajeServicio from './pasajero_compra_pasaje.service.js';
import servicioAvion from './avion.service.js';

const getPasajeros = async () => model.Pasajero.findAll();

const getPasajero = async (id) => {
  const pasajero = await model.Pasajero.findOne({ where: { id } });

  if (!pasajero) throw new Error('no se encontro pasajero');

  return pasajero;
};

const postPasajero = async (data) => {
  const { error, value } = validacionBodyPasajero(data);

  if (error) throw new Error(error);

  return model.Pasajero.create({ ...value });
};

const deletePasajero = async (id) => {
  const pasajero = await model.Pasajero.destroy({ where: { id } });
  if (!pasajero) throw new Error('No se encontro el pasajero');
};

const patchPasajero = async (id, data) => {
  const { error, value } = validacionBodyPasajeroEdicion(data);

  if (error) throw new Error(error);

  const pasajeroEditado = await model.Pasajero.update(
    { ...value },
    {
      where: {
        id,
      },
    },
  );

  if (!pasajeroEditado[0]) throw new Error('No se puedo editar al pasajero');
};

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

const comprarPasaje = async (data, idCuenta) => {
  console.info(data);
  // trae los asientos disponibles de ese vuelo
  const { libres } = await servicioAvion.getAsientosLibres({
    v: data.vuelo,
    a: data.avion,
    clase: data.clase,
  });

  if (libres.length === 0) throw new Error('no hay lugares disponibles');

  // agrega al pasajero
  const pasajero = await postPasajero(data.pasajero);

  if (idCuenta) {
    // eslint-disable-next-line max-len
    await cuentaPasajerServicio.postCuentaPasajero({ id_cuenta: idCuenta, id_pasajero: pasajero.id, puntos: 100 });
  }
  const asientoRandom = getRandom(libres);

  const pasajeroComprapasaje = await pasajeroCompraPasajeServicio.postPasajeroCompraPasaje({
    id_vuelo_pasaje: data.vuelo_pasaje,
    id_pasajero: pasajero.id,
    monto: data.total,
    asiento: asientoRandom.placa,
    fecha: new Date().toISOString(),
    estado: 'comprado',
  });

  return { pasajero, asiento: asientoRandom, pasajero_compra_pasaje: pasajeroComprapasaje.id };
};

const cambiarPasaje = async (data) => {
  const nuevoPasaje = await pasajeroCompraPasajeServicio.patchPasajeroCompraPasaje(data);
  return nuevoPasaje;
};

export default {
  getPasajeros,
  postPasajero,
  getPasajero,
  deletePasajero,
  patchPasajero,
  comprarPasaje,
  cambiarPasaje,
};
