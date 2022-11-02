import AvionVuelo from './avion_vuelo.model.js';
import Avion from './avion.model.js';
import CuentaPasajero from './cuenta_pasajero.model.js';
import Cuenta from './cuenta.model.js';
import PasajeVuelo from './pasaje_vuelo.model.js';
import Pasaje from './pasaje.model.js';
import PasajeroCompraPasaje from './pasajero_compra_pasaje.model.js';
import Pasajero from './pasajero.model.js';
import Vuelo from './vuelo.model.js';

// Relaciones de cuenta_pasajero
Cuenta.belongsToMany(Pasajero, { through: CuentaPasajero, foreignKey: 'id_cuenta' });
Pasajero.belongsToMany(Cuenta, { through: CuentaPasajero, foreignKey: 'id_pasajero' });

/// Relaciones de pasajero-compra-pasaje.model
Pasajero.belongsToMany(Pasaje, {
  through: PasajeroCompraPasaje,
  foreignKey: 'id_pasajero',
});
Pasaje.belongsToMany(Pasajero, {
  through: PasajeroCompraPasaje,
  foreignKey: 'id_pasaje',
});

// Relaciones de pasaje-vuelo

Vuelo.belongsToMany(Pasaje, { through: PasajeVuelo, foreignKey: 'vuelo', as: 'pasaje' });
Pasaje.belongsToMany(Vuelo, { through: PasajeVuelo, foreignKey: 'pasaje' });

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
  PasajeVuelo,
  Pasaje,
  PasajeroCompraPasaje,
  Pasajero,
  Vuelo,
};
export default model;
