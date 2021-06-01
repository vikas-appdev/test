const userService = require('../service/userService');
const constants = require('../constants/constants');

module.exports.signup = async (req, res) =>{
    let response = {...constants.defaultServerResponse};

    try{
        const responseFromService = await userService.signup(req.body);
        response.status = 200;
        response.message = constants.userMessage.SIGNUP_SUCCESS;
        response.body = responseFromService;
    }catch(err){
        console.error('User controller: signup() =>', err);
        response.message = err.message;
    }

    return res.status(response.status).send(response);

}