const express = require('express')

const router = express.Router()

const { newPost,deletePost } = require('../controller/postController')

router.post('/newpost', newPost)
router.delete('/deletepost/:id', deletePost)

module.exports= router