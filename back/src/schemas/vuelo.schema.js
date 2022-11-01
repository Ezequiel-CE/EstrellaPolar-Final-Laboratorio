import Joi from 'joi';

export const BodyVuelo = (data) => {
  const schema = Joi.object({
    tarifa: Joi.number().min(10).max(100).required(),
    destino: Joi.string().min(3).max(200).required(),
    origen: Joi.string().min(3).max(200).required(),
  });
  return schema.validate(data);
};

export const editarVuelo = (data) => {
  const schema = Joi.object({
    tarifa: Joi.number().min(10).max(100),
    destino: Joi.string().min(3).max(200),
    origen: Joi.string().min(3).max(200),
  });

  return schema.validate(data);
};
