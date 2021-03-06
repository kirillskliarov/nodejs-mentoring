import * as Joi from 'joi';
import { createValidator } from 'express-joi-validation';

const validator = createValidator({
  passError: true,
});

const uuidSchema = Joi.object({
  uuid: Joi.string().uuid(),
});

export const uuidValidator = validator.params(uuidSchema);
