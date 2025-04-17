const taskModel = require('../models/task.model')

class TaskService {
    async createTask(task) {
        const newTask = new taskModel(task)
        return await newTask.save()
   }

}

module.exports = new TaskService()