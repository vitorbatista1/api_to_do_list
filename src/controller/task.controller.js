const taskModel = require("../models/task.model");
const taskService = require("../service/task.service");

class TaskController {
    async createTask(req, res) {
        try{
            const task = await taskService.createTask(req.body);
            res.status(201).json(
                {
                    name: task.title,
                    description: task.description,
                    status: task.status
                }
            )
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new TaskController();