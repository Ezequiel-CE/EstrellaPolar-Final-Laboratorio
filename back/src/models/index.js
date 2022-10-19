import CuentaPasajero from './cuenta-pasajero.model.js';
import Cuenta from './cuenta.model.js';
import Pasajero from './pasajero.model.js';

// Relaciones de cuenta_pasajero
Cuenta.belongsToMany(Pasajero, { through: CuentaPasajero });
Pasajero.belongsToMany(Cuenta, { through: CuentaPasajero });
