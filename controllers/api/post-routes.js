const router = require('express').Router();
const { Post, User, Comment } = require('../../models');

// Route to create a new blog post
router.post('/', async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id, // Assuming you store the user's ID in the session
    });

    res.status(200).json(newPost);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Route to update a blog post by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedPost = await Post.update(
      {
        title: req.body.title,
        content: req.body.content,
      },
      {
        where: {
          id: req.params.id,
          user_id: req.session.user_id, // Ensure the user can only update their own posts
        },
      }
    );

    if (!updatedPost[0]) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }

    res.status(200).json(updatedPost);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Route to delete a blog post by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedPost = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id, // Ensure the user can only delete their own posts
      },
    });

    if (!deletedPost) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }

    res.status(200).json(deletedPost);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
