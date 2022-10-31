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
Cuenta.belongsToMany(Pasajero, { through: CuentaPasajero });
Pasajero.belongsToMany(Cuenta, { through: CuentaPasajero });

/// Relaciones de pasajero-compra-pasaje.model
Pasajero.belongsToMany(Pasaje, { through: PasajeroCompraPasaje });
Pasaje.belongsToMany(Pasajero, { through: PasajeroCompraPasaje });

// Relaciones de pasaje-vuelo

Pasaje.belongsToMany(Vuelo, { through: PasajeVuelo });
Vuelo.belongsToMany(Pasajero, { through: PasajeVuelo });

// Relaciones de avion-vuelo

Avion.belongsToMany(Vuelo, { through: AvionVuelo });
Vuelo.belongsToMany(Avion, { through: AvionVuelo });
