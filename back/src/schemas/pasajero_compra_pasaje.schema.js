import Joi from 'joi';

const validacionBodyPasajeroCompraPasaje = (data) => {
  const schema = Joi.object({
    id_pasaje: Joi.number().min(1).max(10).required(),
    id_pasajero: Joi.number().min(1).max(10).required(),
    monto: Joi.number().min(1).max(100).required(),
    asiento: Joi.string().min(1).max(3).required(),
  });
  return schema.validate(data);
};

export default validacionBodyPasajeroCompraPasaje;
