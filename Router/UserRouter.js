const express = require('express')

const router = express.Router()

const { newUser, getAllUsers, getOneUserByPK, updateUser, deleteUser } = require('../controller/userController')

router.post('/newUser', newUser)
router.get('/getallUsers', getAllUsers)
router.get('/getOneUser/:id',getOneUserByPK)
router.put('/updateUser/:id', updateUser)
router.delete('/deleteUser/:id', deleteUser)

module.exports= router