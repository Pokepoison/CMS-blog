const router = require('express').Router();

// Include the post controller
const postController = require('../../controllers/api/post-controller');

// Route to create a new blog post
router.post('/', postController.createPost);

// Route to update a blog post by ID
router.put('/:id', postController.updatePost);

// Route to delete a blog post by ID
router.delete('/:id', postController.deletePost);

module.exports = router;
