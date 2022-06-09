
const Categories1 = require("../models/categories.model");

const getAllCate = async (req,res,next) => {
    try {

    }
    catch(error) {

    }
}



const createCate = async (req,res,next) => {
    try {
        console.log('req.body.id:', req.body.id1)
        const id1 = await Categories1.findOne({_id : req.body.id1}).lean().exec();
        console.log('id1:', id1)
        if(!id1) {
            // console.log('id1:', id1)
            const id1 = await Categories1.create( {
                
                _id : req.body.id1,
                $push : { ancestors : [] },
                parent : null
            });
            console.log("id1 :", id1);
        }
        else {
            
        }

        const id2 = await Categories1.findOne({_id : req.body.id2}).lean().exec();
        if(!id2) {
            console.log('req.body.id1:', req.body.id1);
            const id2 = await Categories1.create( {
                _id : req.body.id2,
                
                ancestors : [req.body.id1],
                parent : req.body.id1,
            });
            console.log('id2:', id2)
        }
        else {

        }

        const id3 = await Categories1.findOne({_id : req.body.id3}).lean().exec();
        if(!id3) {
            console.log('req.body.id1:', req.body.id2);
            const id3 = await Categories1.create( {

                _id : req.body.id3,
                ancestors : [req.body.id1,req.body.id2],
                parent : req.body.id2,
            });
            console.log('id2:', id3)
        }
        else {

        }

        return res.status(201).json({
            message : "Hello"
        });
    }
    catch(error) {
        console.log('error:', error)
    }
}

module.exports = {
    getAllCate,
    createCate
}