
const productService = require('../service/productService');
const constants = require('../constants/constants');


module.exports.createProduct = async (req, res)=>{
    let response = {};
    try{
        const responseFromService = await productService.createProduct(req.body);
        response.status = 200;
        response.message = 'Product created successfully';
        response.body = responseFromService;
    }catch(err){
        console.log('Product Controller: createProduct() =>', err);
        response.status = 400;
        response.message = err.message;
        response.body = {};
    }

    return res.status(response.status).send(response);
}


module.exports.getAllProducts = async (req, res)=>{
    let response = {};
    try{
        const responseFromService = await productService.getAllProduct(req.query);
        response.status = 200;
        response.message = 'Product created successfully';
        response.body = responseFromService;
    }catch(err){
        console.log('Product Controller: getAllProducts() =>', err);
        response.status = 400;
        response.message = err.message;
        response.body = {};
    }

    return res.status(response.status).send(response);
}

module.exports.getProductById = async (req, res)=>{
    let response = {};
    try{
        console.log(req.params.id);
        const responseFromService = await productService.getProductById(req.params.id);
        
        response.status = 200;
        response.message = 'Product created successfully';
        response.body = responseFromService;
    }catch(err){
        console.log('Product Controller: getAllProducts() =>', err);
        response.status = 400;
        response.message = err.message;
        response.body = {};
    }

    return res.status(response.status).send(response);
}


module.exports.updateProduct = async (req, res)=>{
    let response = {...constants.defaultServerResponse};
    try{
        const responseFromService = await productService.updateProduct({
            id: req.params.id,
            updateInfo: req.body
        });
        response.status = 200;
        response.message = 'Product updated successfully';
        response.body = responseFromService;
    }catch(err){
        console.log('Product Controller: updateProduct() =>', err);
        response.message = err.message;
    }

    return res.status(response.status).send(response);
}

module.exports.deleteProduct = async (req, res)=>{
    let response = {...constants.defaultServerResponse};
    try{
        const responseFromService = await productService.deleteProduct(req.params);
        response.status = 200;
        response.message = 'Product deleted successfully';
        response.body = responseFromService;
    }catch(err){
        console.log('Product Controller: deleteProduct() =>', err);
        response.message = err.message;
    }

    return res.status(response.status).send(response);
}

