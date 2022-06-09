
const User1 = require("../models/user.model");

const Login1 = require("../models/login.model");

const getAllUsers = async (req,res,next) => {

    try {
        const Users = await User1.find().lean().exec();

        return res.status(200).json({
            Users : Users
        })
    }
    catch(error) {
        return res.status(500).json({
            "error in getAllUsers Controller :" : error.message
        })
    }

}


const postNewUser = async (req,res,next) => {
    try {

        console.log('req.body:', req.body)
        const userFind = await User1.findOne({email : req.body.formData.email}).lean().exec();
        if(userFind) {
            console.log('userFind:', userFind)
            return res.status(500).json({
                "error" : "Email is already registered please use another one Thank You",
            })
        }
        const user = await User1.create(req.body.formData);

        return res.status(201).json({
            user : user,
        })
    }
    catch(error) {
        return res.status(500).json({
            "error in postNewUser" : error.message
        })
    }
}

const loginUser = async (req,res,next) => {
    try {
        const userFind = await User1.findOne({email : req.body.formData.email}).lean().exec();
        console.log('userFind:', userFind)



        if(!userFind || userFind.password !== req.body.formData.password) {
            return res.status(500).json({
                "error" : "The Email and Password wrong please try again"
            })
        }

        const deleteLogin = await Login1.remove({});


        const loginUser = await Login1.create({userId : userFind._id});
        console.log('loginUser:', loginUser)

        return res.status(201).json({

            message : "Login Successfully",
            loginUser : loginUser

        })

    }
    catch(error) {
        return res.status(500).json({
            error : error.message,
        })
    }
}

const getLoginUser = async (req,res,next) => {

    try {
        // console.log("req :", req);
        const loginUser = await Login1.find().populate({path : "userId"}).lean().exec();
        if(loginUser.length === 0) {
            console.log('loginUserNotFound:', loginUser)
            return res.status(200).json({
                message : false
            })
        }
        
        console.log('loginUser:', loginUser[0].userId);
        return res.status(200).json({
            message : loginUser[0].userId
        })

    }
    catch(error) {
        return res.status(500).json({
            error : error.message
        })
    }

}

const userLogOut = async (req,res) => {
    try {
        const { id } = req.params
        console.log('id:', id)
        const loginUser = await Login1.remove({});

        return res.status(201).json({
            message : "LogOut Successfully"
        })
    }
    catch(error) {
        return res.status(500).json({
            error : error.message
        })
    }
}

module.exports = {
    getAllUsers,
    postNewUser,
    loginUser,
    getLoginUser,
    userLogOut
}