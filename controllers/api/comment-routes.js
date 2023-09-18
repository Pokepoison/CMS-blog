const router = require('express').Router();
const { Comment } = require('../../models');

// Route to create a new comment on a blog post
router.post('/', async (req, res) => {
  try {
    const newComment = await Comment.create({
      text: req.body.text,
      user_id: req.session.user_id, // Assuming you store the user's ID in the session
      post_id: req.body.post_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Route to update a comment by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedComment = await Comment.update(
      {
        text: req.body.text,
      },
      {
        where: {
          id: req.params.id,
          user_id: req.session.user_id, // Ensure the user can only update their own comments
        },
      }
    );

    if (!updatedComment[0]) {
      res.status(404).json({ message: 'No comment found with this id' });
      return;
    }

    res.status(200).json(updatedComment);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Route to delete a comment by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedComment = await Comment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id, // Ensure the user can only delete their own comments
      },
    });

    if (!deletedComment) {
      res.status(404).json({ message: 'No comment found with this id' });
      return;
    }

    res.status(200).json(deletedComment);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
