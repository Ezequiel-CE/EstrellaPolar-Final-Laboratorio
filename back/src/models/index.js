import CuentaPasajero from './Cuenta-Pasajero.model.js';
import Cuenta from './Cuenta.model.js';
import Pasajero from './Pasajero.model.js';

// Relaciones de cuenta_pasajero
Cuenta.belongsToMany(Pasajero, { through: CuentaPasajero });
Pasajero.belongsToMany(Cuenta, { through: CuentaPasajero });
