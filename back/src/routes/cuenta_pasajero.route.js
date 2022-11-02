import { Router } from 'express';
import {
  crearRelacionCuentaPasajero,
  verRelacionCuentaPasajero,
  verRelacionesCuentaPasajero,
} from '../controllers/cuenta_pasajero.controller.js';

const cuentaPasajeroRouter = Router();
cuentaPasajeroRouter.get('/adm/', verRelacionesCuentaPasajero);
cuentaPasajeroRouter.get('/adm/:id', verRelacionCuentaPasajero);
cuentaPasajeroRouter.post('/adm/', crearRelacionCuentaPasajero);

export default cuentaPasajeroRouter;
