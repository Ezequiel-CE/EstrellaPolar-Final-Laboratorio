import model from '../models/index.js';
import {
  validacionBodyPasajero,
  validacionBodyPasajeroEdicion,
} from '../schemas/pasajero.schema.js';

const getPasajeros = async () => model.Pasajero.findAll();

const getPasajero = async (id) => {
  const pasajero = await model.Pasajero.findOne({ where: { id } });

  if (!pasajero) throw new Error('no se encontro pasajero');

  return pasajero;
};

const postPasajero = async (data) => {
  const { error, value } = validacionBodyPasajero(data);

  if (error) throw new Error(error);

  await model.Pasajero.create({ ...value });
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

export default {
  getPasajeros,
  postPasajero,
  getPasajero,
  deletePasajero,
  patchPasajero,
};
