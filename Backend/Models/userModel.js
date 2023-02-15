const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    uname: String,
    email: String,
    password: String
})
module.exports = new mongoose.model('user',userSchema)