const express = require('express');
const router = express.Router();
const taskController = require('../controller/task.controller');
const authMiddleware = require('../middleware/auth.middleware');
const rateLimitMiddleware = require('../middleware/rateLimit.middleware')
const { validateUpdateTaskSchema } = require('../validations/task.validation');

router.use(rateLimitMiddleware);

router.post('/newTask', authMiddleware, taskController.createTask);
router.post('/:taskId/status', authMiddleware, taskController.alterarStatusTask);

module.exports = router;