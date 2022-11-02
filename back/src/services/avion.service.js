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
const servicio = { postAvion, getAvion, getVuelosByAvion };
export default servicio;
