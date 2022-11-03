import Joi from 'joi';

const validacionBodyPasajeroCompraPasaje = (data) => {
  const schema = Joi.object({
    id_pasaje: Joi.number().required(),
    id_pasajero: Joi.number().required(),
    monto: Joi.number().required(),
    asiento: Joi.string().required(),
  });
  return schema.validate(data);
};

export default validacionBodyPasajeroCompraPasaje;
