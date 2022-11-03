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

const comprarPasaje = async (data) => {
  const vuelosCompletos = await servicios.getVuelosTratado();

  const vuelo = vuelosCompletos.find((v) => v.id === data.vuelo);

  const asientos = await servicioAvion.getAsientosLibres(vuelo.id);

  data.pasajeros.forEach(async (informacion) => {
    const pasajero = await postPasajero(informacion);
    const { dataValues: pasaje } = vuelo.clase.find((v) => v.id === data.pasaje);
    let asientoRandom;

    if (pasaje.id === 1) {
      const asientosVip = asientos.filter((asiento) => asiento.includes('A'));
      asientoRandom = asientosVip[Math.floor(Math.random() * asientosVip.length)];
    } else {
      const asientosComunes = asientos.filter((asiento) => asiento.includes('B'));
      asientoRandom = asientosComunes[Math.floor(Math.random() * asientosComunes.length)];
    }

    await pasajeroCompraPasajeServicio.postPasajeroCompraPasaje({
      id_pasaje: pasaje.id,
      id_pasajero: pasajero.id,
      monto: pasaje.total,
      asiento: asientoRandom,
    });
  });
};

export default {
  getPasajeros,
  postPasajero,
  getPasajero,
  deletePasajero,
  patchPasajero,
  comprarPasaje,
};
