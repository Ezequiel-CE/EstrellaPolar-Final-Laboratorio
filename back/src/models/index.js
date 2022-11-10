import AvionVuelo from './avion_vuelo.model.js';
import Avion from './avion.model.js';
import CuentaPasajero from './cuenta_pasajero.model.js';
import Cuenta from './cuenta.model.js';

import Pasaje from './pasaje.model.js';
import PasajeroCompraPasaje from './pasajero_compra_pasaje.model.js';
import Pasajero from './pasajero.model.js';
import Vuelo from './vuelo.model.js';

// Relaciones de cuenta_pasajero
Cuenta.belongsToMany(Pasajero, { through: CuentaPasajero, foreignKey: 'id_cuenta' });
Pasajero.belongsToMany(Cuenta, { through: CuentaPasajero, foreignKey: 'id_pasajero' });

// Relaciones de PasajeCompraPasaje pasaje

Pasaje.hasMany(PasajeroCompraPasaje, { foreignKey: 'id' });
PasajeroCompraPasaje.belongsTo(Pasaje, { foreignKey: 'id_pasaje' });

// Relaciones de PasajeCompraPasaje pasaje

Vuelo.hasMany(PasajeroCompraPasaje, { foreignKey: 'id' });
PasajeroCompraPasaje.belongsTo(Vuelo, { foreignKey: 'id_vuelo' });

// Relaciones de avion-vuelo

Avion.belongsToMany(Vuelo, {
  through: AvionVuelo,
  foreignKey: 'avion',
});
Vuelo.belongsToMany(Avion, {
  through: AvionVuelo,
  foreignKey: 'vuelo',
});

const model = {
  AvionVuelo,
  Avion,
  CuentaPasajero,
  Cuenta,
  Pasaje,
  PasajeroCompraPasaje,
  Pasajero,
  Vuelo,
};
export default model;
