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
exports.addToCart = async(req,res)=>{
    try {
        const {id,Name,Price,Image,totalQuantity} = req.body
        const newItem = {
            id,
            Name,
            Price,
            Image,
            totalQuantity,
        }
        const result = await userModel.findOneAndUpdate({_id:id},{ $push: { cart: newItem } })
        console.log(result)
        return res.send(result)
    } catch (error) {
        res.send("Something went wrong")
    }
}
exports.getAllCartItems = async(req,res)=>{
    try{
        const {id} = req.params
        const user = await userModel.find({_id:id},{cart:1}).exec()
        return res.json(user).status(200)
    }catch{
        res.send("Something went wrong").status(400)
    }
}
exports.changeQuantity = async(req,res)=>{
    try {
        const {id} =  req.params
        const result  = await userModel.findOneAndUpdate({_id:id}, { $set:{cart:req.body}})
        res.json(result).status(200)
    } catch (error) {
    }
}

