const PostSchema = require("../models/post.js");

// CREATE
const createPosts = async (req, res) => {
  try {
    const { WomanData, ManData } = req.body;

    const newWomanPost = await PostSchema.create({
      name: WomanData.name,
      description: WomanData.description,
      category: "Woman"
    });

    const newManPost = await PostSchema.create({
      name: ManData.name,
      description: ManData.description,
      category: "Man"
    });

    res.status(201).json({
      Woman: newWomanPost,
      Man: newManPost,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};



// GET
const Products = async (req, res) => {
  try {
    const WomanPosts = await PostSchema.find({ category: "Woman" });
    const ManPosts = await PostSchema.find({ category: "Man" });

    res.status(200).json({
      Woman: WomanPosts,
      Man: ManPosts,
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

module.exports = { createPosts, getDetail, Products, getUpdate, deletePost, searchPost };
