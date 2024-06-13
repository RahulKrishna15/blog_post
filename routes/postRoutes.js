const express = require('express');
const postController = require('../controllers/postController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/posts', authMiddleware, postController.createPost);
router.get('/posts/:id', postController.getPostById);
router.put('/posts/:id', authMiddleware, postController.updatePost);
router.delete('/posts/:id', authMiddleware, postController.deletePost);
router.get('/user/posts', authMiddleware, postController.getUserPosts);

module.exports = router;
