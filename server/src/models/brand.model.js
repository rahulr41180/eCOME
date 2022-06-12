
const mongoose = require("mongoose");

const BrandSchema = mongoose.Schema({
    productId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "product",
    },
    brand : {
        type : String,
    }
},{

    timestamps : true,
    versionKey : false,
})

const Brand1 = mongoose.model("brand", BrandSchema);

module.exports = Brand1;