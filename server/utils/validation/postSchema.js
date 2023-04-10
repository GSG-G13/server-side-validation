const Joi = require('joi');

const postSchema = Joi.object({
  title: Joi.string().min(3).max(30).required(),
  content: Joi.string().min(10).max(500).required(),
  visibility: Joi.string().valid('public', 'private').required()
});

module.exports = postSchema;