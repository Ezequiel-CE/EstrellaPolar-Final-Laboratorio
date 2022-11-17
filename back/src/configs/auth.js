import * as dotenv from 'dotenv';
import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import model from '../models/index.js';

dotenv.config();

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(
  new Strategy(jwtOptions, async (payload, next) => {
    const cuenta = await model.Cuenta.findOne({
      where: { email: payload.cuenta },
    });

    if (cuenta) {
      next(null, cuenta);
    } else {
      next(null, false);
    }
  }),
);
