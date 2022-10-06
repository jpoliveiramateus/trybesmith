import Joi from 'joi';

const validateLoginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const createProductSchema = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

export = {
  validateLoginSchema,
  createProductSchema,
};