
const productService = require('../service/productService');


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