const express = require('express');
const app = express();
const {getAllTasks, createTask, editTask, deleteTask, getAllTasksByUser} = require('../controllers/taskController');

// Todas las tareas
app.get('/', getAllTasks)

// Todas las tareas por un usuario
app.get('/:id', getAllTasksByUser)

// Crear una tarea
app.post('/', createTask)

// Editar una tarea
app.patch('/:id', editTask)

// Eliminar una tarea
app.delete('/:id', deleteTask)

module.exports = app;