const express = require('express')
const {createUser,validUser} = require('./../Controllers/userControllers.js')
const router = express.Router();
router.post('/newUser',createUser)
router.post('/',validUser)
module.exports = router