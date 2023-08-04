const express = require('express');
const { Products, createPosts, getDetail, getUpdate, deletePost, searchPost,getLaptops } = require('../controllers/post.js');

const router =  express.Router();


router.get('/Products', Products)
router.post('/createPosts', createPosts)
router.get('/getDetail/:id', getDetail)
router.patch('/getUpdate/:id', getUpdate)
router.delete('/deletePost/:id', deletePost)
router.get('/searchPost', searchPost)

module.exports = router