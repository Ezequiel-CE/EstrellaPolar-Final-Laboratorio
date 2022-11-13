import Joi from 'joi';

export const validacionBodyPasajero = (data) => {
  const schema = Joi.object({
    nombre: Joi.string().min(3).max(30).required(),
    apellido: Joi.string().min(3).max(30).required(),
    tipo_documento: Joi.string().min(3).max(30).required(),
    num_documento: Joi.string().min(3).max(20).required(),
    fecha_nacimiento: Joi.date().required(),
    telefono: Joi.string().min(4).max(20).required(),
    direccion: Joi.string().min(3).max(70).required(),
    email: Joi.string().min(5).max(200).required().email(),
  });
  return schema.validate(data);
};

export const validacionBodyPasajeroEdicion = (data) => {
  const schema = Joi.object({
    nombre: Joi.string().min(3).max(30),
    apellido: Joi.string().min(3).max(30),
    tipo_documento: Joi.string().min(3).max(30),
    num_documento: Joi.string().min(3).max(20),
    fecha_nacimiento: Joi.date(),
    telefono: Joi.string().min(4).max(20),
    direccion: Joi.string().min(3).max(70),
    email: Joi.string().email().min(5).max(200),
  });

  return schema.validate(data);
};
