const express = require('express')
const router = express.Router();

const userControllers = require('../controllers/users');

// get all users
router.get('/users', userControllers.getAllUsers)

// get user by mane and age
router.get('/users/user-by-name-and-age', userControllers.getUserByNameAndAge)

function validate(req, res, next) {
    const {username,password} = req.body;
    console.log(username)
    if (!username){
        next("Username is required");
    }
    if( username.length > 20){
        next("Username exceed 20 characters")
    }
    if (!password){
        next("password is required");
    }
    if( password.length > 8){
        next("Password exceed 8 characters")
    }
    next()
}

// create (namy) user
router.post('/users', validate, userControllers.createUser)

module.exports = router;