import Joi from '@hapi/joi';

export const newUserValidator = (req, res, next) => {
  const schema = Joi.object({
    FirstName: Joi.string().min(4).required(),
    LastName: Joi.string().min(4).required(),
    Email: Joi.string().email().required(),
    Passwrd: Joi.string().min(6).required()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};
export const newNoteValidator = (req, res, next) => {
  const schema = Joi.object({
    Title: Joi.string().min(6).required(),
    Descreption: Joi.string().required(),
    color: Joi.string().optional()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};
