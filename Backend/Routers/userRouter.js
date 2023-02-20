const express = require('express')
const {createUser,getAllCartItems,changeQuantity,validUser,addToCart} = require('./../Controllers/userControllers.js')
const router = express.Router();
router.post('/newUser',createUser)
router.post('/',validUser)
router.post("/addToCart",addToCart)
router.post("/updateQuantity/:id",changeQuantity)
router.get("/cartItems/:id",getAllCartItems)
module.exports = router