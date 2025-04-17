const Joi = require('joi');

const updateTaskSchema = Joi.object({
    title: Joi.string().min(3).required().messages({
        'string.empty': 'O nome da tarefa é obrigatório',
        'string.min': 'O nome da tarefa deve ter pelo menos 3 caracteres',
        'any.required': 'O nome da tarefa é obrigatório',
    }),
    description: Joi.string().min(3).required().messages({
        'string.empty': 'A descrição da tarefa é obrigatória',
        'string.min': 'A descrição da tarefa deve ter pelo menos 3 caracteres',
        'any.required': 'A descrição da tarefa é obrigatória',
    }),
});

function validateUpdateTaskSchema(req, res, next) {
    updateTaskSchema.validate(req.body, { abortEarly: false }, (err, value) => {
        if (err) {
            return res.status(400).json({ error: err.details.map(detail => detail.message) });
        }
        next();
    });
}

module.exports = { validateUpdateTaskSchema };