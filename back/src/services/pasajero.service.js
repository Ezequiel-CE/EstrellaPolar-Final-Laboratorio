import model from '../models/index.js';
import {
  validacionBodyPasajero,
  validacionBodyPasajeroEdicion,
} from '../schemas/pasajero.schema.js';
import servicios from './vuelo.service.js';
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

const comprarPasaje = async (data) => {
  // todos los vuelos
  const vuelosCompletos = await servicios.getVuelosTratado();

  // encientra el vuelo por id
  const vuelo = vuelosCompletos.find((v) => v.id === data.vuelo);

  // trae los asientos disponibles de ese vuelo
  const { asientosComerciales, asientosPremium } = await servicioAvion.getAsientosLibres(
    vuelo.id,
  );

  data.pasajeros.forEach(async (informacion) => {
    // encuentra el tipo de pasaje en el vuelo
    const { dataValues: pasaje } = vuelo.pasajes.find((v) => v.id === data.pasaje);

    if (!pasaje) throw new Error('no existe tipo de pasaje en este vuelo');

    // agrega al pasajero

    let asientoRandom;

    if (pasaje.id === 1) {
      asientoRandom = getRandom(asientosPremium);
    } else {
      asientoRandom = getRandom(asientosComerciales);
    }

    const pasajero = await postPasajero(informacion);

    await pasajeroCompraPasajeServicio.postPasajeroCompraPasaje({
      id_vuelo_pasaje: data.vuelo_pasaje,
      id_pasajero: pasajero.id,
      monto: pasaje.total,
      asiento: asientoRandom,
      fecha: new Date().toISOString(),
      estado: 'comprado',
    });
  });
};

const cambiarPasaje = async (data) => {
  const nuevoPasaje = await pasajeroCompraPasajeServicio.patchPasajeroCompraPasaje(data);
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
