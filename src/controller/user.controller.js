const userService = require('../service/user.service');

class UserController {
    async createUser(req, res) {
        try {
            const user = await userService.createUser(req.body);
            res.status(201).json('Usuário cadastrado com sucesso');
        } catch (error) {
            if (error.code === 11000) return res.status(409).json('Usuário ja cadastrado');
            res.status(500).send(error.message);
        }
    }

    async getUserById(req, res) {
        try {
            const user = await userService.getUserById(req.user.id);
            if (!user) return res.status(404).json('Usuário não encontrado');
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateUser(req, res) {
        try {
            const user = await userService.updateUser(req.params.id, req.body);
            if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteUser(req, res) {
        try {
            const user = await userService.deleteUser(req.params.id);
            if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });
            res.json({ message: 'Usuário deletado com sucesso' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async loginUser(req, res) {
        try {
            const { email, password } = req.body;
            const user = await userService.loginUser(email, password);
            if (!user) return res.status(401).json({ error: 'Email ou senha incorretos' });
    
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    
}

module.exports = new UserController();