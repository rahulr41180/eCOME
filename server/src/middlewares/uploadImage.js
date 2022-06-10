
const path = require("path");

const multer = require("multer");
// const image = require("../productImage");

const res = require("express/lib/response");


console.log("Hello");
const storage = multer.diskStorage({
    destination : function(req, file, callback) {
    
        // console.log('req:', req)

        callback(null, path.join(__dirname, "../productImage"))

    },

    filename : function(req,file, callback) {

        const uniquePrefix = Date.now();

        callback(null, uniquePrefix + "-" + file.originalname)
    }
});

const fileFilter = (req, file, callback) => {

    if(file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        callback(null, true);
    }
    
    else {
        callback(new Error("Incorrect mime type file"), false);
    }
}

const options = {

    storage : storage,
    fileFilter : fileFilter,
    limits : {
        fileSize : 1024*1024*5,
    }
}

const uploads = multer(options);


const uploadFiles = (formKey, method) => {
    return function(req,res,next) {
        let uploadedItem;
        if(method === "single") {
            uploadedItem = uploads.single(formKey);
        }
        else if(method === "multiple") {
            uploadedItem = uploads.any(formKey);
        }

        return uploadedItem(req,res, function(error) {
            if(error instanceof multer.MulterError) {
                return res.status(500).json({
                    
                    message : error.message
                })
            }
            else if(error) {
                return res.status(500).json({
                    message : error.message
                })
            }
            return next();
        })
    }
}

module.exports = { uploadFiles };