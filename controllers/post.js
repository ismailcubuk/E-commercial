const PostSchema = require("../models/post.js");

// CREATE
const createPosts = async (req, res) => {
  try {
    const {
      TshirtData,
      TrousersData,
      ShoesData,
      PhoneData,
      WatchData,
      EarphonesData,
      MouseData,
      KeyboardData,
      HeadphonesData
    } = req.body;

    const newTshirtPost = await PostSchema.create({
      name: TshirtData.name,
      description: TshirtData.description,
      category: "Tshirt"
    });

    const newTrousersPost = await PostSchema.create({
      name: TrousersData.name,
      description: TrousersData.description,
      category: "Trousers"
    });

    const newShoesPost = await PostSchema.create({
      name: ShoesData.name,
      description: ShoesData.description,
      category: "Shoes"
    });

    const newPhonePost = await PostSchema.create({
      name: PhoneData.name,
      description: PhoneData.description,
      category: "Phone"
    });

    const newWatchPost = await PostSchema.create({
      name: WatchData.name,
      description: WatchData.description,
      category: "Watch"
    });

    const newEarphonesPost = await PostSchema.create({
      name: EarphonesData.name,
      description: EarphonesData.description,
      category: "Earphones"
    });

    const newMousePost = await PostSchema.create({
      name: MouseData.name,
      description: MouseData.description,
      category: "Mouse"
    });

    const newKeyboardPost = await PostSchema.create({
      name: KeyboardData.name,
      description: KeyboardData.description,
      category: "Keyboard"
    });

    const newHeadphonesPost = await PostSchema.create({
      name: HeadphonesData.name,
      description: HeadphonesData.description,
      category: "Headphones"
    });

    res.status(201).json({
      Tshirt: newTshirtPost,
      Trousers: newTrousersPost,
      Shoes: newShoesPost,
      Phone: newPhonePost,
      Watch: newWatchPost,
      Earphones: newEarphonesPost,
      Mouse: newMousePost,
      Keyboard: newKeyboardPost,
      Headphones: newHeadphonesPost
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};




// GET
const Products = async (req, res) => {
  try {
    const TshirtPosts = await PostSchema.find({ category: "Tshirt" });
    const TrousersPosts = await PostSchema.find({ category: "Trousers" });
    const ShoesPosts = await PostSchema.find({ category: "Shoes" });
    const PhonePosts = await PostSchema.find({ category: "Phone" });
    const WatchPosts = await PostSchema.find({ category: "Watch" });
    const EarphonesPosts = await PostSchema.find({ category: "Earphones" });
    const MousePosts = await PostSchema.find({ category: "Mouse" });
    const KeyboardPosts = await PostSchema.find({ category: "Keyboard" });
    const HeadphonesPosts = await PostSchema.find({ category: "Headphones" });

    res.status(200).json({
      Tshirt: TshirtPosts,
      Trousers: TrousersPosts,
      Shoes: ShoesPosts,
      Phone: PhonePosts,
      Watch: WatchPosts,
      Earphones: EarphonesPosts,
      Mouse: MousePosts,
      Keyboard: KeyboardPosts,
      Headphones: HeadphonesPosts
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
