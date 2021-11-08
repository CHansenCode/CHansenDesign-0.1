import Joi from "joi";

export const registerValidation = Joi.object({
  username: Joi.string().min(6).max(30).alphanum().required(),
  password: Joi.string().min(6).max(30).required(),
  email: Joi.string().min(6).max(50).required().email(),
});
