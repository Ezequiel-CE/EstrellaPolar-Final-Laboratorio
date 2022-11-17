import { Router } from 'express';
import passport from 'passport';
import {
  crearPasaje,
  VerPasaje,
  encontrarPasaje,
  encontrarPasajePorCuenta,
} from '../controllers/pasaje.controller.js';

const routerPasaje = Router();

routerPasaje.get('/adm/:id', VerPasaje);
routerPasaje.post('/adm/', crearPasaje);
routerPasaje.post('/', encontrarPasaje);
routerPasaje.get('/cuenta', passport.authenticate('jwt', { session: false }), encontrarPasajePorCuenta);

export default routerPasaje;
