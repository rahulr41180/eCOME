
const mongoose = require("mongoose");

const CategoriesSchema = new mongoose.Schema({
    _id : {
        type : String,
    },
    ancestors : [],
    parent : {
        type : String,
    }
},{
    timestamps : true,

    versioKey : false,
});

const Categories1 = mongoose.model("categories", CategoriesSchema);

module.exports = Categories1;