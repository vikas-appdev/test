const bcrypt = require('bcrypt');
const User = require('../database/model/userModel');
const constants = require('../constants/constants');



module.exports.signup = async ({ email, password }) =>{
    try{
        const user = await User.findOne({ email });
        if(user){
            throw new Error(constants.userMessage.DUPLICATE_EMAIL);
        }

        

    }catch(err){

    }
}