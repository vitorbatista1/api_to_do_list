const express = require('express');
const router = express.Router();
const taskController = require('../controller/task.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/newTask', authMiddleware, taskController.createTask);

module.exports = router;