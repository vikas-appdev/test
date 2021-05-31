module.exports = {
    defaultServerResponse: {
        status: 400,
        message: '',
        body: {}
    },
    productMessage: {
        PRODUCT_CREATED: 'Product created successfully',
        PRODUCT_FETCHED: 'Product fetched successfully',
        PRODUCT_NOT_FOUND: 'Product not found with given id, Please check id.'
    },
    requestValidationMessage: {
        BAD_REQUEST: 'Invalid fields'
    },
    databaseMessage:{
        INVALID_ID: 'Given id is invalid, please check id'
    }
}