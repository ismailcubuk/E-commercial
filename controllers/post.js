const PostSchema = require("../models/post.js");

// CREATE
const createPosts = async (req, res) => {
  try {
    const newPost = await PostSchema.create(req.body);
    res.status(201).json({
      newPost,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// GET
const getPosts = async (req, res) => {
  try {
    const getPosts = await PostSchema.find();
    res.status(200).json({
      getPosts,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// DETAİL
const getDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const detailPost = await PostSchema.findById(id);
    res.status(201).json({
      detailPost,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// UPDATE
const getUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const updatePost = await PostSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      newPost,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// DELETE
const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    await PostSchema.findByIdAndRemove(id);
    res.status(201).json({
      message: "Post deleted",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


const searchPost = async (req,res) => {
    const { search, tag} = req.query;
    try {
        const title = new RegExp(search, "i")

        const posts = await PostSchema.find({ $or: [{title}], tag:{$in: tag.split(",")}})
        res.status(200).json({
            posts
        })
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = { createPosts, getDetail, getPosts, getUpdate, deletePost, searchPost };
