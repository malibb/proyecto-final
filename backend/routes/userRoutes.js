const express = require('express');
const app = express();
const {createUser, deleteUser, getUserById, authenticateUser} = require('../controllers/userControllers')


// Buscar un usuario por ID
app.get('/:id', getUserById)

// crear un usuario
app.post('/', createUser)

// Eliminar un usuario
app.delete('/:id', deleteUser)

// autenticación de usuario
app.post('/auth', authenticateUser)


module.exports = app