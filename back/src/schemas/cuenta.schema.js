import Joi from 'joi';

const cuentaValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(5).max(200).required().email(),
    password: Joi.string().min(3).max(200).required(),
  });
  return schema.validate(data);
};

export default cuentaValidation;
