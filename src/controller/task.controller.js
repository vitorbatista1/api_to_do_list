const taskService = require("../service/task.service");

class TaskController {
    async createTask(req, res) {
        try{
            const taskData = {
                ...req.body,
                user: req.userId
            };
            const task = await taskService.createTask(taskData);

            res.status(201).json(
                {
                    nome: task.title,
                    descricao: task.description,
                    status: task.status
                });
            }catch(error){
                res.status(500).json({ error: error.message }); 
            }
        }
}


module.exports = new TaskController();