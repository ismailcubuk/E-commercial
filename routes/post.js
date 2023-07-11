const express = require('express');
const { getPosts, createPosts, getDetail, getUpdate, deletePost, searchPost } = require('../controllers/post.js');

const router =  express.Router();


router.get('/getPosts', getPosts)
router.get('/createPosts', createPosts)
router.get('/getDetail/:id', getDetail)
router.get('/getUpdate/:id', getUpdate)
router.get('/deletePost/:id', deletePost)
router.get('/searchPost', searchPost)

module.exports = router