import Joi from 'joi';

const BodyAvion = (data) => {
  const schema = Joi.object({
    aerolinea: Joi.string().min(10).max(100).required(),
    capacidad: Joi.number().min(20).max(200).required(),
  });
  return schema.validate(data);
};

export default BodyAvion;
