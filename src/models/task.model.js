const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'O nome da tarefa é obrigatório'],
        trim: true,
        minlength: [3, 'Nome deve ter pelo menos 3 caracteres'],
        maxlength: [50, 'Nome não pode exceder 50 caracteres']
    },
    description: {
        type: String,
        required: [true, 'A descrição da tarefa é obrigatória'],
        trim: true,
        minlength: [3, 'Descrição deve ter pelo menos 3 caracteres'],
        maxlength: [50, 'Descrição não pode exceder 50 caracteres']
    },
    status: {
        type: String,
        enum: ['pendente', 'concluida'],
        default: 'pendente'
    },
    createdAt: {
        type: Date,
        default: Date.now    
    },
    updateAt: {
        type: Date,
        default: Date.now    
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true          

        }
})

module.exports = mongoose.model('Task', taskSchema);