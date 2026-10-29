const { posts } = require('../models')

const newPost = async (req,res)=> {
    try {
        const {title, content, published, likes, category, userId} = req.body;
        const addedPost = await posts.create({title, content, published, likes, category, userId});
            res.status(201).json({
                message:"Post added successfully",
                data:addedPost
            })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}

const deletePost = async (req, res) => {
    const {id} = req.params;
    try {
        const post = await posts.findByPk(id);

        if (post == null) {
            return res.status(404).json({
                message: 'Post not found'
            });
        }

        await post.destroy();

        res.status(200).json({
            message: 'Post deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}


module.exports={
    newPost,
    deletePost
}