const Post = require('../models/post.model.js');

const findPost = async (req, next) => {
    try {
        const post = await Post.findById(req.id);
        next(null, post);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    findPost
};