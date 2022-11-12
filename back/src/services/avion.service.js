import model from '../models/index.js';
import BodyAvion from '../schemas/avion.schema.js';

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

const getAsientosLibres = async (data) => {
  const { v, a, clase } = data;

  let pasajes = await model.Pasaje.findOne(
    {
      attributes: ['categoria'],

      where: { categoria: clase },
      include: {
        model: model.Vuelo,
        required: false,
        attributes: [['id', 'vuelo_id']],
        where: { id: v },
        through: {
          as: 'vuelo_pasaje',
        },
        include: {
          required: false,
          model: model.Avion,
          where: { id: a },
          through: {
            attributes: [],
          },
        },
      },
    },
    // (params) => params.dataValues,
  );
  if (!pasajes) throw new Error('No se encontro pasaje');

  pasajes = pasajes.dataValues;
  const [vuelo] = pasajes.vuelos;
  const [avion] = vuelo.dataValues.avions;
  const { vuelo_pasaje } = vuelo.dataValues;
  delete pasajes.vuelos;

  pasajes = {
    ...pasajes,
    vuelo: {
      avion: avion.dataValues,
      relacion: vuelo_pasaje.dataValues,
    },
  };

  const { id_vuelo } = pasajes.vuelo.relacion;
  let pasajerosCompraPasaje = await model.PasajeroCompraPasaje.findAll({
    include: [
      { model: model.Pasajero, attributes: ['nombre', 'apellido'] },
      { where: { id_vuelo }, model: model.pasajeVuelo },
    ],
  });
  if (!pasajerosCompraPasaje.length) throw new Error('No se encontro pasajes');
  pasajerosCompraPasaje = pasajerosCompraPasaje.map((pasajero) => pasajero.dataValues);
  pasajes.vuelo.pasajes = pasajerosCompraPasaje;

  const pasajesComprados = pasajes.vuelo.pasajes;
  const { capacidad } = pasajes.vuelo.avion;
  const { categoria } = pasajes;

  const asientosVip = Math.round(30 % capacidad);

  let asientos = [];

  const plantillaAsiento = {
    placa: '',
    clase: '',
    permitido: false,
    info: { estado: 'libre' },
  };

  for (let i = 0; i < capacidad; i++) {
    if (i <= asientosVip) {
      asientos[i] = {
        ...plantillaAsiento,
        placa: `A${i + 1}`,
        clase: 'vip',
      };
    } else {
      asientos[i] = { ...plantillaAsiento, placa: `B${i + 1}`, clase: 'comercial' };
    }
  }

  asientos = asientos.map((asiento) => {
    pasajesComprados.forEach((comprado) => {
      if (asiento.placa === comprado.asiento) {
        asiento.info = {
          estado: 'ocupado',
          pasajero: `${comprado.pasajero.dataValues.nombre} ${comprado.pasajero.dataValues.apellido}`,
        };
      }
    });
    if (asiento.clase === categoria) {
      asiento.permitido = !plantillaAsiento.permitido;
    }

    return asiento;
  });

  const asientosLibres = asientos.filter(
    (asiento) => asiento.permitido && asiento.info.estado === 'libre',
  );
  pasajes = {
    asientos,
    libres: asientosLibres,
  };

  return pasajes;
};

const servicioAvion = { postAvion, getAvion, getVuelosByAvion, getAsientosLibres };
export default servicioAvion;
