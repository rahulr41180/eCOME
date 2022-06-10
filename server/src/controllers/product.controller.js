
const Product1 = require("../models/product.model");

const getAllProduct = async (req,res,next) => {
    try {

    }
    catch(error) {

    }
}



const createNewProduct = async (req,res,next) => {
    try {
        // console.log('req.file.path:', req.file.path)
        // const id = "62a36dbb16045238546ee24b"
        // console.log('req.body.productImage:', req.body.productImage)

        const productFind = await Product1.findOne({productName : req.body.productName}).lean().exec();
        if(productFind) {

            return res.status(200).json({
                message : "Product already created please create another product"
            })

        }

        const product = await Product1.create({
            cateId : req.body.cateId,
            productImage : [{productImage : req.body.productImage}],

            price : req.body.price,
            productName : req.body.productName,
            // $push : {productImage : {$each : [{productImage : req.body.productImage}]}}
        })

        // const productUpdate = await Product1.findByIdAndUpdate(id,{
        //     // productImage : [{productImage : req.body.productImage}]
        //     $push : {productImage : {$each : [{productImage : req.body.productImage}]}}
        // },
        // {new : true})
        console.log('product:', product)
        return res.status(201).json({

            message : "Product has created successfully"

        })
    }
    catch(error) {
        console.log('error:', error)
        return res.status(500).json({
            message : error.message
        })
    }
}


module.exports = {
    getAllProduct,
    createNewProduct
}