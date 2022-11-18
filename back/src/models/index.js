import AvionVuelo from './avion_vuelo.model.js';
import Avion from './avion.model.js';
import CuentaPasajero from './cuenta_pasajero.model.js';
import Cuenta from './cuenta.model.js';
import Pasaje from './pasaje.model.js';
import PasajeroCompraPasaje from './pasajero_compra_pasaje.model.js';
import Pasajero from './pasajero.model.js';
import Vuelo from './vuelo.model.js';
import pasajeVuelo from './pasaje_vuelo.model.js';

// Relaciones de cuenta_pasajero
Cuenta.belongsToMany(Pasajero, { through: CuentaPasajero, foreignKey: 'id_cuenta' });
Pasajero.belongsToMany(Cuenta, { through: CuentaPasajero, foreignKey: 'id_pasajero' });
Cuenta.hasMany(CuentaPasajero, { foreignKey: 'id' });
CuentaPasajero.belongsTo(Cuenta, { foreignKey: 'id_cuenta' });
Pasajero.hasMany(pasajeVuelo, { foreignKey: 'id' });
CuentaPasajero.belongsTo(Pasajero, { foreignKey: 'id_pasajero' });

// Relaciones de PasajeCompraPasaje pasaje

pasajeVuelo.hasOne(PasajeroCompraPasaje, { foreignKey: 'id' });
PasajeroCompraPasaje.belongsTo(pasajeVuelo, { foreignKey: 'id_vuelo_pasaje' });

// Relaciones de PasajeCompraPasaje pasajero

Pasajero.hasMany(PasajeroCompraPasaje, { foreignKey: 'id' });
PasajeroCompraPasaje.belongsTo(Pasajero, { foreignKey: 'id_pasajero' });

// Relaciones de avion-vuelo

Avion.belongsToMany(Vuelo, {
  through: AvionVuelo,
  foreignKey: 'id_avion',
});
Vuelo.belongsToMany(Avion, {
  through: AvionVuelo,
  foreignKey: 'id_vuelo',
});

// relacion pasaje-vuelo

Vuelo.belongsToMany(Pasaje, {
  through: pasajeVuelo,
  foreignKey: 'id_vuelo',
});
Pasaje.belongsToMany(Vuelo, {
  through: pasajeVuelo,
  foreignKey: 'id_pasaje',
});
Vuelo.hasMany(pasajeVuelo, { foreignKey: 'id' });
pasajeVuelo.belongsTo(Vuelo, { foreignKey: 'id_vuelo' });
Pasaje.hasMany(pasajeVuelo, { foreignKey: 'id' });
pasajeVuelo.belongsTo(Pasaje, { foreignKey: 'id_pasaje' });

const model = {
  AvionVuelo,
  Avion,
  CuentaPasajero,
  Cuenta,
  Pasaje,
  PasajeroCompraPasaje,
  Pasajero,
  Vuelo,
  pasajeVuelo,
};
export default model;
