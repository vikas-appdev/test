const Joi = requir('joi');

module.exports.signup = Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().require()
});