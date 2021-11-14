import Joi from 'joi';

export const mediaValidation = Joi.object({
  //required
  title: Joi.string().required(),
  alt: Joi.string().allow(''),
  description: Joi.string().allow(''),

  category: Joi.string().allow(''),
  project: Joi.string().allow(''),

  drawingType: Joi.string().allow(''),
  scale: Joi.number().allow(''),
  northRotation: Joi.number().min(0).max(360),

  tags: Joi.array().allow(''),
  programs: Joi.array().allow(''),

  url: Joi.string().allow(''),
  filename: Joi.string().allow(''),

  createdBy: Joi.string().allow('')
});

export default mediaValidation;
