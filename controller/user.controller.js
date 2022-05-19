const {User} = require('../models');

const createUser = async(req, res) => {
    const {msv, name, group, country} = req.body

    try {
        const newUser = await User.create({msv, name, group, country})
        res.status(201).send(newUser)
    } catch (error) {
        res.status(500).send(error);
    }
}

const getAllUser = async(req, res) => {
    try {
        const infoUser = await User.findAll() 
        res.status(201).send(infoUser)
    } catch (error) {
        res.status(500).send(error)
    }
}

const getDetailUser = async(req, res) => {
    const {id} = req.params;
    try {
        const infoUser = await User.findOne({
            where: {
                id
            }
        }) 
        res.status(201).send(infoUser)
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteUser = async(req, res) => {
    const {id} = req.params;
    try {
        const infoUser = await User.destroy({
            where: {
                id
            }
        }) 
        res.status(201).send(`delete complete ${id}`)
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateUser = async(req, res) => {
    const {id} = req.params;
    const {msv, name, group, country} = req.body;
    try {
        const data = await User.findOne({
            where: {
                id
            }
        })
        if(!data){
            res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
        }else{
            await User.destroy({
                where: {
                    id
                }
            }) 
            const newUser = await User.create({msv, name, group, country})
            res.status(201).send(newUser)
        }
    } catch (error) {
        res.status(500).send({ message : "Error Update user information"})    }
}

module.exports = {
    createUser, getAllUser, getDetailUser, deleteUser, updateUser
}