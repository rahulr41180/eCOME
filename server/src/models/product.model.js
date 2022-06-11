
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    cateId : {
        type : mongoose.Schema.Types.String,
        ref : "categories",
    },
    productName : {
        type : String,
    },
    productPrice : {
        
        type : Number,
    },
    productDescription : {
        type : String,
    },
    productImage : [],
},{
    timestamps : true,
    versioKey : false,
});

const Product1 = mongoose.model("product", ProductSchema);

module.exports = Product1;