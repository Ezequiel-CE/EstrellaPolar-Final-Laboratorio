import { Router } from 'express';
import {
  crearRelacionPasajeroCPasaje,
  verRelacionPasajeroCPasaje,
  verRelacionesPasajeroCPasaje,
} from '../controllers/pasajero_compra_pasaje.controller.js';

const pasajeroCompraPasajeRouter = Router();
pasajeroCompraPasajeRouter.post('/', crearRelacionPasajeroCPasaje);
pasajeroCompraPasajeRouter.get('/', verRelacionesPasajeroCPasaje);
pasajeroCompraPasajeRouter.get('/:id', verRelacionPasajeroCPasaje);

export default pasajeroCompraPasajeRouter;
