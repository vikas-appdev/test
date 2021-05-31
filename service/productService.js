const Product = require('../database/model/ProductModel');
const { formatMongoData, checkObjectId } = require('../helper/dbhelper');
const constants = require('../constants/constants');
const mongoose = require('mongoose');

module.exports.createProduct = async (serviceData)=>{
    try{
        let product = new Product({...serviceData});
        let result =  await product.save();
        return formatMongoData(result);
    }catch(err){
        throw new Error(err);
    }
}


module.exports.getAllProduct = async ({ skip=0, limit=10})=>{
    try{
        let products = await Product.find({}).skip(parseInt(skip)).limit(parseInt(limit));
        return formatMongoData(products);
    }catch(err){
        console.log('Product Service: getAllProduct: Something went wrong', err);
        throw new Error(err);
    }
}

module.exports.getProductById = async (id)=>{
    try{
        checkObjectId(id);
        let products = await Product.findById(id);
        if(!products){
            throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
        }
        return formatMongoData(products);
    }catch(err){
        console.log('Product Service: getProductById: Something went wrong', err);
        throw new Error(err);
    }
}