import { Sequelize, Op } from 'sequelize';
import model from '../models/index.js';

import { BodyVuelo, editarVuelo } from '../schemas/vuelo.schema.js';

const postVuelo = (body) => {
  const { error, value } = BodyVuelo(body);

  const { tarifa, destino, origen } = value;

  if (error) {
    throw new Error(error);
  }

  return model.Vuelo.create({
    tarifa,
    destino,
    origen,
  });
};

const patchVuelo = async (vuelo) => {
  const { error, value } = editarVuelo(vuelo.body);

  if (error) {
    throw new Error(error);
  }

  const vueloEditado = await model.Vuelo.update(
    { ...value },
    {
      where: {
        id: vuelo.id,
      },
    },
  );
  return vueloEditado;
};

const getVuelo = async (id) => {
  const vuelo = await model.Vuelo.findByPk(id, { include: [{ model: model.Avion }] });
  if (!vuelo) {
    throw new Error('No se encontro vuelo');
  }
  return vuelo;
};

const deleteVuelo = async (id) => {
  const vuelo = await model.Vuelo.destroy({ where: { id } });
  if (!vuelo) {
    throw new Error('No se encontro vuelo');
  }
  return vuelo;
};

const getVuelos = async () => {
  const vuelos = await model.Vuelo.findAll();
  /* Checking if the array is empty and if it is, it throws an error. */
  if (vuelos.length === 0) throw new Error('No se encontro vuelos');
  return vuelos;
};

const getVuelosTratado = async (id) => {
  let vuelos;

  if (id) {
    vuelos = await model.Vuelo.findAll({
      attributes: [
        'id',
        'origen',
        'destino',
        [Sequelize.fn('DATE_FORMAT', Sequelize.col('fecha'), '%m-%d-%Y %H:%i:%s'), 'fecha'],
      ],
      where: { id },
      include: [
        {
          model: model.Pasaje,
          attributes: ['id', [Sequelize.literal('tarifa + costo'), 'total'], 'categoria'],
          through: {
            as: 'relacion_vuelo',
          },
        },
        { model: model.Avion },
      ],
    });
  } else {
    vuelos = await model.Vuelo.findAll({
      attributes: [
        'id',
        'origen',
        'destino',
        [Sequelize.fn('DATE_FORMAT', Sequelize.col('fecha'), '%m-%d-%Y %H:%i:%s'), 'fecha'],
      ],

      include: [
        {
          model: model.Pasaje,
          attributes: ['id', [Sequelize.literal('tarifa + costo'), 'total'], 'categoria'],
          through: {},
        },
        { model: model.Avion },
      ],
    });
  }

  if (!vuelos.length) throw new Error('No se encontro vuelos');

  return vuelos;
};

const getVuelosTratadoFiltrado = async (data) => {
  const vuelos = await model.Vuelo.findAll({
    attributes: [
      'id',
      'origen',
      'destino',
      [Sequelize.fn('DATE_FORMAT', Sequelize.col('fecha'), '%m-%d-%Y %H:%i:%s'), 'fecha'],
    ],
    where: {
      origen: data.origen,
      destino: data.destino,
      fecha: { [Op.substring]: data.fecha },
    },
    include: {
      model: model.Pasaje,
      attributes: ['id', [Sequelize.literal('tarifa + costo'), 'total'], 'categoria'],
      through: {
        as: 'relacion_vuelo',
      },
    },
  });

  if (!vuelos.length) throw new Error('No se encontro vuelos');

  return vuelos;
};

const servicio = {
  postVuelo,
  getVuelo,
  getVuelos,
  patchVuelo,
  deleteVuelo,
  getVuelosTratado,
  getVuelosTratadoFiltrado,
};

export default servicio;
