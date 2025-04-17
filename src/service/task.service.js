const taskModel = require('../models/task.model')

class TaskService {
    async createTask(task) {
        const newTask = new taskModel(task)
        return await newTask.save()
   }

   async alterarStatusTask(taskId, status) {
        
        return await taskModel.findOneAndUpdate({ _id: taskId }, { status }, { new: true })
   }

}

module.exports = new TaskService()