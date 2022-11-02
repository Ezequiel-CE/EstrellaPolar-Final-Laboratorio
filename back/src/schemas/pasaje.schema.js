import Joi from 'joi';

const BodyPasaje = (data) => {
  const schema = Joi.object({
    costo: Joi.number().min(10).max(100).required(),
    categoria: Joi.string().min(3).max(200).required(),
  });
  return schema.validate(data);
};

export default BodyPasaje;
