import User from "../models/user.js";

async function createUser(req,res){
    const {name, phoneNumber, email} = req.body;

    try{
        const newUser = new User({name, phoneNumber, email})
        await User.save()
        res.status(200).json({response: true, message: 'success'})
    }catch(err){
        res.status(500).json({response: false, message: err.message})
    }
}



async function verifyUser(){

}