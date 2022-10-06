import Joi from 'joi';

const validateLoginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const createProductSchema = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

const createUserSchema = Joi.object({
  username: Joi.string().min(3).required(),
  classe: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});

export = {
  validateLoginSchema,
  createProductSchema,
  createUserSchema,
};