require('dotenv').config()
const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const mongoose = require('mongoose');

const port = process.env.PORT || 3000
const server = express()
server.use(express.json())
server.use(cors())
server.disable('x-powered-by')

mongoose.connect(process.env.MONGO_URI).then(() => console.log('Conexion a la base de datos')).catch( err => console.error(err))

server.use('/api/v1', routes)

server.listen(port, () =>{
    console.log(`Listening on port http://localhost:${port}`);
})


