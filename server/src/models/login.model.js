
const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
    }
}, {
    timestamps : true,
    versionKey : false,
})



const Login1 = mongoose.model("login", LoginSchema);

module.exports = Login1;