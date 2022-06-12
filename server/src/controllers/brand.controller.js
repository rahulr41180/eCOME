
const Product1 = require('../models/product.model');

const Categories1 = require("../models/categories.model");
const Brand1 = require("../models/brand.model");

const getProductById = async (req,res,next) => {
    try {
        const { id } = req.params;
        console.log('id:', id)
        const productOne = await Product1.findOne({_id : id}).populate("cateId").lean().exec();
        console.log('productOne:', productOne)


        // const CateOne = await Categories1.find({_id : productOne.cateId}).lean().exec();
        // console.log('CateOne:', CateOne)

        return res.status(200).json({
            productOne : productOne,
        })
    }
    catch(error) {
        console.log('error:', error)

        return res.status(500).json({
            message : error,
        })

    }
}

const createBrand = async (req,res,next) => {
    try {
        const { id } = req.params;
        console.log('id:', id)
        console.log("req.body :", req.body);

        const product = await Product1.findOne({_id : id}).populate("cateId").lean().exec();
        console.log('product:', product)

        const brandOne = await Brand1.findOne({productId : id}).lean().exec();
        if(brandOne) {

            return res.status(500).json({
                message : "Brand already created for this product Thank You"
            })

        }

        const Brand = await Brand1.create({productId : id, brand : product.cateId._id});
        console.log('Brand:', Brand)


        return res.status(201).json({
            brand : Brand,
        })
    }
    catch(error) {
        return res.status(500).json({
            error : error.message
        })
    }
}

module.exports = {
    getProductById,
    createBrand
}