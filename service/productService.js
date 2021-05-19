const Product = require('../database/model/ProductModel');

module.exports.createProduct = async (serviceData)=>{
    try{
        let product = new Product({...serviceData});
        return await product.save();
    }catch(err){
        throw new Error(err);
    }
}