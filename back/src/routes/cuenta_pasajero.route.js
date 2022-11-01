import { Router } from 'express';
import {
  crearRelacionCuentaPasajero,
  verRelacionCuentaPasajero,
  verRelacionesCuentaPasajero,
} from '../controllers/cuenta_pasajero.controller.js';

const cuentaPasajeroRouter = Router();
cuentaPasajeroRouter.get('/', verRelacionesCuentaPasajero);
cuentaPasajeroRouter.get('/:id', verRelacionCuentaPasajero);
cuentaPasajeroRouter.post('/', crearRelacionCuentaPasajero);

export default cuentaPasajeroRouter;
