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

        async alterarStatusTask(req, res) {
            try{
                const { status } = req.body;
                const { taskId } = req.params;
                console.log("Esse é o status", status)  
                console.log("Esse é o id", taskId)
                if (!taskId) return res.status(400).json({ error: 'Task ID is required' });
                const task = await taskService.alterarStatusTask(taskId, status);
                res.status(200).json(task);
            }catch(error){
                res.status(500).json({ error: error.message }); 
            }
        }
}


module.exports = new TaskController();