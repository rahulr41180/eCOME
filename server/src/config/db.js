
const mongoose = require("mongoose");

const ConnectDB = () => {
    return mongoose.connect("mongodb+srv://rahulr41180:Rahul12345@cluster0.i4t9k.mongodb.net/ecomeApp?retryWrites=true&w=majority")
    .then(() => console.log("MongoDB has successfully connected"))
    .catch((error) => console.log("error in MongoDB connection :", error.message))
}

module.exports = ConnectDB;