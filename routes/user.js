const express = require('express');
const usercontroller = require('../controllers/usercontroller');
const router = express.Router();


router.get('/users', function(req, res){
    usercontroller.getAllUsers(req, res);
}) 

router.get('/user/:id', function(req, res){
    usercontroller.getUser(req, res);
})

module.exports = router;