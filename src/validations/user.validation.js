const Joi = require('joi');

const createUserSchema = Joi.object({
  name: Joi.string().min(3).required().messages({
    'string.empty': 'O nome é obrigatório',
    'string.min': 'O nome deve ter pelo menos 3 caracteres',
    'any.required': 'O nome é obrigatório',
  }),
  email: Joi.string().email().required().messages({
    'string.empty': 'O email é obrigatório',
    'string.email': 'Por favor, insira um email válido',
    'any.required': 'O email é obrigatório',
  }),
  password: Joi.string().min(6).required().messages({
    'string.empty': 'A senha é obrigatória',
    'string.min': 'A senha deve ter pelo menos 6 caracteres',
    'any.required': 'A senha é obrigatória',
  }),
});

function validateCreateUser(req, res, next) {
  const { error } = createUserSchema.validate(req.body, { abortEarly: false });
  if (error) {
    const formatted = {};
    error.details.forEach((err) => {
      const field = err.path?.[0] || 'erro';
      formatted[field] = err.message;
    });
    return res.status(400).json({ erro: formatted });
  }
  next();
}

const loginUserSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.empty': 'O email é obrigatório',
    'string.email': 'Por favor, insira um email válido',
    'any.required': 'O email é obrigatório',
  }),
  password: Joi.string().min(6).required().messages({
    'string.empty': 'A senha é obrigatória',
    'string.min': 'A senha deve ter pelo menos 6 caracteres',
    'any.required': 'A senha é obrigatória',
  }),
});

function validateLoginUser(req, res, next) {
  const { error } = loginUserSchema.validate(req.body, { abortEarly: false });
  if (error) {
    const formatted = {};
    error.details.forEach((err) => {
      const field = err.path?.[0] || 'erro';
      formatted[field] = err.message;
    });
    return res.status(400).json({ erro: formatted });
  }
  next();
}

module.exports = {
  validateCreateUser,
  validateLoginUser
};
