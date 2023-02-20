const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    uname: {type:String,required: true},
    email: {type:String,unique:true,required: true},
    password: {type:String,required: true},
    cart : {type:[{
        id : {type: mongoose.Types.ObjectId},
        Name: {type:String},
        Price:{type:String},
        Image:{type:String},
        totalQuantity:{type:String}
    }]}
})
module.exports = new mongoose.model('user',userSchema)