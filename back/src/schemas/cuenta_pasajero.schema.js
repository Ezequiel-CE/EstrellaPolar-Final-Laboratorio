import Joi from 'joi';

const validacionBodyCuentaPasajero = (data) => {
  const schema = Joi.object({
    id_cuenta: Joi.number().min(1).max(100).required(),
    id_pasajero: Joi.number().min(1).max(100).required(),
    puntos: Joi.number().min(1).max(100).required(),
  });
  return schema.validate(data);
};

export default validacionBodyCuentaPasajero;
