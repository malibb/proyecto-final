const {Router} = require('express');
// const validateJWT = require('../utils/validateJWT');
const router = Router()

const taskRoutes = require('./taskRoutes');
const userRoutes = require('./userRoutes');


router.use('/tasks', taskRoutes)
router.use('/users', userRoutes)


module.exports = router
