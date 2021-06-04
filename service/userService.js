const bcrypt = require('bcrypt');
const User = require('../database/model/userModel');
const constants = require('../constants/constants');
const { formatMongoData } = require('../helper/dbhelper');



module.exports.signup = async ({ email, password }) =>{
    try{
        const user = await User.findOne({ email });
        if(user){
            throw new Error(constants.userMessage.DUPLICATE_EMAIL);
        }

        hashPassword = await bcrypt.hash(password, 12);
        const newUser = new User({email: email, password:hashPassword});
        //const newUser = new User({email, password}); // If hashPassword name is same as password then you can use this way

        let result = await newUser.save();

        return formatMongoData(result);

        

    }catch(err){
        console.log('UserService: signup(): Something went wrong=>', err);
        throw new Error(err);
    }
}