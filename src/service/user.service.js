const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

class UserService {
    async createUser(userData) {
        const user = new User(userData)
        return await user.save()
    }

    async getUserById(userId) {
        return await User.findOne({ _id: userId })
    }

    async updateUser(userId, userData) {
        return await User.findOneAndUpdate({ _id: userId }, userData)
    }

    async deleteUser(userId) {
        return await User.findOneAndDelete({ _id: userId })
    }

    async loginUser(email, password) {
        const user = await User.findOne({ email }).select('+password');
        if (!user) return null;

        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) return null;


        const token = jwt.sign(
            { id: user._id, email: user.email, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN || '1d' }
        );
        
        return {
            user: {
                name: user.name,
                email: user.email,
                role: user.role
            },
            token
        };
    }
    
}

module.exports = new UserService()