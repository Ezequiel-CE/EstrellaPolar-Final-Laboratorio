import model from '../models/index.js';
import BodyAvion from '../schemas/avion.schema.js';
import pasajeroCPasajeService from './pasajero_compra_pasaje.service.js';

const postAvion = (body) => {
  const { error, value } = BodyAvion(body);

  if (error) throw new Error(error);

  return model.Avion.create(value);
};

const getAvion = async (id) => {
  const avion = await model.Avion.findByPk(id);
  if (!avion) {
    throw new Error('No se encontro avion');
  }
  return avion;
};

const getVuelosByAvion = async (id) => {
  const vuelos = await model.Avion.findOne({
    attributes: { exclude: ['capacidad'] },
    include: [
      {
        model: model.Vuelo,
        as: 'vuelos',
        required: true,
        through: {
          where: { avion: id },
          as: 'relacion',
          attributes: ['id', 'observacion'],
        },
      },
    ],
  });
  if (!vuelos) throw new Error('No se encontro vuelos');
  return vuelos;
};

const getAsientosLibres = async (idVuelo) => {
  // traigo el vielo
  const vuelo = await model.Vuelo.findOne({
    where: { id: idVuelo },
    include: [
      {
        model: model.Avion,
      },
    ],
  });

  const capacidadMaxima = vuelo.avions[0].capacidad;

  const cantidadPremium = Math.round(capacidadMaxima * 0.3);

  const asientos = [];
  for (let i = 0; i < capacidadMaxima; i++) {
    if (i <= cantidadPremium) {
      asientos[i] = `A${i + 1}`;
    } else {
      asientos[i] = `B${i + 1}`;
    }
  }

  // traigo asientos ocupados en el vuelos
  const pasajesComprados = await pasajeroCPasajeService.obtenerPasajesComprados(idVuelo);
  // traigo asientos libres
  const asientosOcupados = pasajesComprados.map((pasaje) => pasaje.asiento);
  const asientosLibres = asientos.filter((val) => !asientosOcupados.includes(val));
  const asientosPremium = asientosLibres.filter((val) => val.includes('A'));
  const asientosComerciales = asientosLibres.filter((val) => val.includes('B'));

  return { asientosOcupados, asientosPremium, asientosComerciales };
};

const servicioAvion = { postAvion, getAvion, getVuelosByAvion, getAsientosLibres };
export default servicioAvion;
