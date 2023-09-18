const router = require('express').Router();

// Include the comment controller
const commentController = require('../../controllers/api/comment-controller');

// Route to create a new comment on a blog post
router.post('/', commentController.createComment);

// Route to update a comment by ID
router.put('/:id', commentController.updateComment);

// Route to delete a comment by ID
router.delete('/:id', commentController.deleteComment);

module.exports = router;
