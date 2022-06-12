
const Product1 = require('../models/product.model');

const Categories1 = require("../models/categories.model");

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

module.exports = {
    getProductById,

}