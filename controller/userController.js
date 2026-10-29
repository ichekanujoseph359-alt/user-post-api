const { Users,posts } = require('../models')

const newUser = async (req,res)=> {
    try {
        const message = req.body;
        const addedUser = await Users.create(message);
            res.status(201).json({
                message:"User created successfully",
                data:addedUser
            })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}

const getAllUsers = async (req, res)=> {
  try {
        const users = await Users.findAll()
    res.status(200).json({
        message:`Users found successfully and total is ${userId.length}`,
        data:users
    })
  } catch (error) {
        res.status(500).json({
        message:error.message
        })
  }
}

const getOneUserByPK = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await Users.findByPk(id, {
            include: [{ model: posts, as: 'Posts' }]
        });

        if (user == null) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            message: "User found successfully",
            data: user
        });
    } catch (error) {
         res.status(500).json({
        message:error.message
        })
    }
}

const updateUser = async (req, res) => {
    const {id} = req.params;
    try{
        const user = await Users.findByPk(id)
        if(user == null){
            return res.status(404).json({
                message: 'User not found'
            })
        }
        const {firstName, email, lastName} = req.body;

        await user.update({firstName, email, lastName})

        const updatedUser = await Users.findByPk(id, {
            include: [{model: posts, as: 'Posts'}]
        })
        res.status(200).json({
            message: "User updated successfully",
            data: user
        });
    }catch (error){
        res.status(500).json({
        message:error.message
        })
    }
}

const deleteUser = async (req, res) => {
    const {id} = req.params;
    try {
        const user = await Users.findByPk(id);

        if (user == null) {
            return res.status(404).json({
                message: 'Post not found'
            });
        }

        await user.destroy();

        res.status(200).json({
            message: 'User deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

module.exports = {
    newUser,
    getAllUsers,
    getOneUserByPK,
    updateUser,
    deleteUser
}