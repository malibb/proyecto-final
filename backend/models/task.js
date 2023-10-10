const {Schema, model} = require('mongoose')

const taskSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    isDone: {type: Boolean, required: true},
    end_date: {type: Date, required: false},
    user: {type: Schema.Types.ObjectId, required: true, ref: 'User'}
}, {timestamps: true})

const Task = model('Task', taskSchema)

module.exports = Task

