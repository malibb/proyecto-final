const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    nickName: {type: String, required: true, unique: true},
    mail: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

const User = model('User', userSchema)

module.exports = User