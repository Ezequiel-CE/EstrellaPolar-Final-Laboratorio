import model from '../models/index.js';
import Vuelo from '../models/vuelo.model.js';
import { BodyVuelo, editarVuelo } from '../schemas/vuelo.schema.js';

const postVuelo = (body) => {
  const { error, value } = BodyVuelo(body);

  const { tarifa, destino, origen } = value;

  if (error) {
    throw new Error(error);
  }

  return Vuelo.create({
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

  const vueloEditado = await Vuelo.update(
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
  const vuelo = await Vuelo.findByPk(id, { include: [{ model: model.Avion }] });
  if (!vuelo) {
    throw new Error('No se encontro vuelo');
  }
  return vuelo;
};

const deleteVuelo = async (id) => {
  const vuelo = await Vuelo.destroy({ where: { id } });
  if (!vuelo) {
    throw new Error('No se encontro vuelo');
  }
  return vuelo;
};

const getVuelos = async () => {
  const vuelos = await Vuelo.findAll();
  if (vuelos.length === 0) throw new Error('No se encontro vuelos');
  return vuelos;
};

const servicio = {
  postVuelo,
  getVuelo,
  getVuelos,
  patchVuelo,
  deleteVuelo,
};

export default servicio;
