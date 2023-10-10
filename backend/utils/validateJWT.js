const jwt = require('jsonwebtoken');

const validateJWT = (req, resp, next) => {

    const authHeader = req.get('authorization');
    if (!authHeader) return resp.status(404).send({message: 'Missing authorization header'})

    const token = authHeader.split(' ')[1]
    
    jwt.verify(token, process.env.SECRET_KEY, (err, decode) => {
        if (err) return resp.status(401).send({message: 'Denied access'})
        return next()
    })

}

module.exports = validateJWT;