const userModel = require('./../Models/userModel.js')
const bcrypt = require('bcrypt')

exports.createUser = async(req,res)=>{
try {
    const {uname,email,password} = req.body;
    const user = await userModel.findOne({email:email})
    if(user){
        res.send("User already found with same mail").status(400)
    }
    else{
        const newPassword =await bcrypt.hash(password,10)
        const newUser = await new userModel({
            email,
            uname,
            password:newPassword,
        }).save()
        res.send(newUser).status(200)
    }
} catch (error) {
    res.send(error.message)
}
}

exports.validUser = async(req,res)=>{
try {
    const {email,password} = req.body;
    const user = await userModel.findOne({email:email})
    let pass
    if(user){
        pass = await bcrypt.compare(password,user.password)
        if(pass){
            res.send(user).status(200)
        }else{
            res.send("password or email is invalid").status(400)
        }
    }
    else{
        res.send("password or email is invalid").status(400)
    }
} catch (error) {
    res.send(error.message)
}
}
