const userServices = require('../services/userServices');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class userControllers {
    
    static createUser (req, res){

        const body = req.body;
        const hash = bcrypt.hashSync(body.password, 10)
        body.password = hash
        body.mail = body.mail.toLowerCase()
        body.nickName = body.nickName[0].toUpperCase() + body.nickName.slice(1).trim()
                
        userServices.create({input: body}).then(user => res.status(200).send(user))
        .catch(err => res.status(500).send({message: 'Internal Server Error'+ err}))
    }

    static deleteUser (req, res) {

        const {id} = req.params

        userServices.delete({id}).then(task => {
            
            if(task.deletedCount === 0) return res.status(404).send({message: 'User not found'})
            return res.status(200).send({message: 'User deleted successfully'})
        })
        .catch(err => res.status(500).send({message: 'Internal Server Error'+ err}))

    }

    static getUserById (req, res) {
        const {id} = req.params

        userServices.getUserById({id}).then(user =>{
            if(user === null) return res.status(404).send({message: 'User not found'})

            return res.status(200).send(user)
        })
        .catch(err => res.status(500).send({message: 'Internal Server Error'+ err}))
    }

    static authenticateUser (req, res) {

        const {mail, password} = req.body

        userServices.findUser({input: mail}).then(user =>{

            if(user === null) return res.status(401).send({message: 'Usuario o contraseña incorrecta'})
            
            const {mail, nickName, _id} = user
            const compare = bcrypt.compareSync(password, user.password)

            if(!compare) return res.status(401).send({message: 'Usuario o contraseña incorrecta'})

            const token = jwt.sign({_id, mail, nickName}, process.env.SECRET_KEY, {expiresIn: '60m'})

            return res.status(200).send({message: token})

        })
    }

   
}

module.exports = userControllers;