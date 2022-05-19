const express = require('express');
const {userRoute} = require('./user.router.js');


const rootRoute = express.Router();

rootRoute.use('/', userRoute)


module.exports = {
    rootRoute
}