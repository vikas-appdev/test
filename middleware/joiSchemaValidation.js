
const Joi = require('joi');
const { schema } = require('../database/model/ProductModel');
const constants = require('../constants/constants');

const validateObjectSchema = (data, schema) =>{
    const result = schema.validate(data);
    console.log('Joi schema validation result', result);
    //console.log('Joi schema validation result', result.error.details);
    if(result.error){
        const errorDetails = result.error.details.map(value=>{
            return {
                error: value.message,
                path: value.path
            }
        });
        return errorDetails;
    }

    return null;

}

module.exports.validateBody = (schema) =>{
    return (req, res, next)=>{
        let response = {...constants.defaultServerResponse}
        const error = validateObjectSchema(req.body, schema);
        if(error){
            response.body = error;
            response.message = constants.requestValidationMessage.BAD_REQUEST;

            return res.status(response.status).send(response);

        }
        return next();
    }
}

module.exports.validateQueryParams = (schema) =>{
    return (req, res, next)=>{
        let response = {...constants.defaultServerResponse}
        const error = validateObjectSchema(req.parms, schema);
        if(error){
            response.body = error;
            response.message = constants.requestValidationMessage.BAD_REQUEST;

            return res.status(response.status).send(response);

        }
        return next();
    }
}