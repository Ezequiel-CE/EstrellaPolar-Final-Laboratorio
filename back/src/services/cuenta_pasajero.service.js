import CuentaPasajero from '../models/cuenta_pasajero.model.js';

const postCuentaPasajero = async (data) => CuentaPasajero.create(data);

// const exist = await CuentaPasajero.findOne({
//   where: { id_cuenta: data.id_cuenta, id_pasajero: data.id_pasajero },
// });

// if (exist) throw new Error('pasaje ya fue comprado');

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
