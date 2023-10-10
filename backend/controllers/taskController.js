const taskServices = require("../services/taskServices");


class taskController {
    static getAllTasks(req, res) {
        const params = req.query
        
        if(Object.keys(params).length > 0){
            return taskServices.search({params}).then(task => {
                return res.status(200).send(task);
            })
            .catch(err => res.status(500).send({message: 'Internal Server Error'+ err}))
        }

         taskServices.getAll().then(tasks => {
            if (tasks.length === 0) return res.status(404).send({message: 'Tasks not found'})
            return res.status(200).send(tasks)
         })
        .catch(err => res.status(500).send({message: 'Internal Server Error'+ err})) 
    }

    static getAllTasksByUser (req, res) {
        const {id} = req.params

        
        taskServices.getAllByUser({id}).then(tasks => {
            if (tasks.length === 0) return res.status(404).send({message: 'Tasks not found'})

            return res.status(200).send(tasks)

        })
        .catch(err => res.status(500).send({message: 'Internal Server Error'+ err})) 
    }

    static createTask(req, res) {

        const body = req.body
       
        taskServices.create({input: body}).then(task => {
           return res.status(201).send(task)
        })
        .catch(err => res.status(500).send({message: 'Internal Server Error'+ err}))
        
    }

    static editTask(req, res) {
        const {id} = req.params
        const body = req.body

        taskServices.update({id, input: body}).then(task => {
            if(task === null) return res.status(404).send({message: 'Task not found'})

            return res.status(200).send(task)
        })
        .catch(err => res.status(500).send({message: 'Internal Server Error'+ err}))

    }

    static deleteTask(req, res){

        const {id} = req.params

        taskServices.delete({id}).then(task => {
            
            if(task.deletedCount === 0) return res.status(404).send({message: 'task not found'})
            return res.status(200).send({message: 'Task deleted successfully'})
        })
        .catch(err => res.status(500).send({message: 'Internal Server Error'+ err}))

    }
}

module.exports = taskController; 