
const Product1 = require("../models/product.model");

const Categories1 = require("../models/categories.model");

const getAllProduct = async (req,res,next) => {
    try {
        const products = await Product1.find().lean().exec();
        console.log('products:', products)
        return res.status(200).json({
            products : products
        })
    }
    catch(error) {
        return res.status(500).json({
            message : error.message
        })
    }
}



const createNewProduct = async (req,res,next) => {
    try {
        console.log("req",req.body);
        const id1 = await Categories1.findOne({_id : req.body.id1}).lean().exec();
        const id2 = await Categories1.findOne({_id : req.body.id2}).lean().exec();
        const id3 = await Categories1.findOne({_id : req.body.id3}).lean().exec();

        if(!id1 || !id2 || !id3) {
            console.log('id1:', id1);
            return res.status(500).json({
                message : "Please First Create Category"  
            })
        }

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
            cateId : req.body.id3,
            productImage : [{productImage : req.body.productImage}],

            productPrice : req.body.productPrice,
            productName : req.body.productName,
            productDescription : req.body.productDescription,
            // $push : {productImage : {$each : [{productImage : req.body.productImage}]}}
        })

        // const productUpdate = await Product1.findByIdAndUpdate(id,{
        //     // productImage : [{productImage : req.body.productImage}]
        //     $push : {productImage : {$each : [{productImage : req.body.productImage}]}}
        // },
        // {new : true})
        // console.log('product:', product)
        return res.status(201).json({
            message : "Product has created successfully"
        });
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