import Pasajero from '../models/pasajero.model.js';
import {
  validacionBodyPasajero,
  validacionBodyPasajeroEdicion,
} from '../schemas/pasajero.schema.js';

const getPasajeros = async () => Pasajero.findAll();

const postPasajero = async (data) => {
  const { error, value } = validacionBodyPasajeroEdicion(data);

  if (error) throw new Error(error);

  await Pasajero.create({ ...value });
};

export default { getPasajeros, postPasajero };
