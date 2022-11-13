import CuentaPasajero from '../models/cuenta_pasajero.model.js';
import validacionBodyCuentaPasajero from '../schemas/cuenta_pasajero.schema.js';

const postCuentaPasajero = async (data) => {
  const { error, value } = validacionBodyCuentaPasajero(data);

  if (error) throw new Error(error);

  const exist = await CuentaPasajero.findOne({
    where: { id_cuenta: value.id_cuenta, id_pasajero: value.id_pasajero },
  });

  if (exist) throw new Error('pasaje ya fue comprado');

  return CuentaPasajero.create(value);
};

const getAllCuentaPasajero = async () => CuentaPasajero.findAll();

const getCuentaPasajero = async (id) => {
  const cuentaPasajero = await CuentaPasajero.findOne({ where: { id } });
  if (!cuentaPasajero) {
    throw new Error('No se pasaje comprado');
  }
  return cuentaPasajero;
};

export default {
  postCuentaPasajero,
  getCuentaPasajero,
  getAllCuentaPasajero,
};
