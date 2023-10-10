const User = require('../models/user');

class userServices {

    static async create({input}){
        return await User.create(input);
    }

    static async delete({id}){
        return await User.deleteOne({_id: id})
    }

    static async getUserById({id}){
        return await User.findById(id)
    }

    static async findUser({input}){
        return await User.findOne({mail: input})
    }
}


module.exports = userServices;
