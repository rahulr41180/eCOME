
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName : {
        type : String,
    },
    lastName : {
        type : String,
    },
    email : {
        type : String,

        unique : true,
    },
    mobileNumber : {
        type : Number,
    },
    gender : {
        type : String,
    },
    password : {
        type : String,
    },
    address : []
}, {
    timestamps : true,
    versionKey : false,
})



const User1 = mongoose.model("user", UserSchema);

module.exports = User1;