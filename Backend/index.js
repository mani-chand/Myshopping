const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express()
const userRouter = require('./Routers/userRouter.js')
app.use(bodyParser.json())
app.use(cors({origin: ['http://localhost:3000', 'http://127.0.0.1:5000']}));
app.use('/',userRouter)
mongoose.connect('mongodb+srv://manichand:root@cluster0.oll6q.mongodb.net/shoppingStore?retryWrites=true&w=majority').then(()=>{
    app.listen(5000,()=>{
        console.log(`Server running on port ${5000}`)
    })
}).catch(err=>{
    console.log(err.message)
})