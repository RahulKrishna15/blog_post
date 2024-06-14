const { Post } = require('../models');

exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const userId = req.user.userId; // Get the userId from the authenticated user
    const post = await Post.create({ title, content, userId });
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    if (post.userId !== req.user.userId) {
      return res.status(403).json({ error: 'Unauthorized' });
    }
    const { title, content } = req.body;
    post.title = title;
    post.content = content;
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    if (post.userId !== req.user.userId) {
      return res.status(403).json({ error: 'Unauthorized' });
    }
    await post.destroy();
    res.status(200).json({msg:"Post Deleted"});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUserPosts = async (req, res) => {
  try {
    const userId = req.user.userId; // Get the userId from the authenticated user
    const posts = await Post.findAll({ where: { userId } });
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
