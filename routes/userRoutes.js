const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const joiSchemaValidation = require('../middleware/joiSchemaValidation');
const userSchema = require('../apiSchema/userSchema');

router.post('/signup', joiSchemaValidation.validateBody(userSchema.signup), userController.signup);


module.exports = router;


