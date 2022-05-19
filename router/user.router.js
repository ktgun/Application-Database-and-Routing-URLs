const express = require('express');
const {createUser, getAllUser, getDetailUser, deleteUser, updateUser} = require('../controller/user.controller');

const userRoute = express.Router();

userRoute.post('/', createUser)
userRoute.get('/', getAllUser)
userRoute.get('/:id', getDetailUser)
userRoute.delete('/:id', deleteUser)
userRoute.put('/:id', updateUser)

module.exports = {
    userRoute
}