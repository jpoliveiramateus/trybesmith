import Joi from 'joi';

const validateLoginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export = {
  validateLoginSchema,
};