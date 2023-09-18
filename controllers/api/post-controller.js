const { Post } = require('../../models');

const postController = {
  createPost: async (req, res) => {
    try {
      const { title, content } = req.body;
      const newPost = await Post.create({
        title,
        content,
        user_id: req.user.id, // Assign the logged-in user's ID to the post
      });
      res.status(200).json(newPost);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },

  updatePost: async (req, res) => {
    try {
      const { title, content } = req.body;
      const postId = req.params.id;
      const updatedPost = await Post.update(
        {
          title,
          content,
        },
        {
          where: {
            id: postId,
            user_id: req.user.id, // Ensure that the logged-in user owns the post
          },
        }
      );
      if (!updatedPost[0]) {
        return res.status(404).json({ message: 'No post found with this id' });
      }
      res.status(200).json(updatedPost);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },

  deletePost: async (req, res) => {
    try {
      const postId = req.params.id;
      const deletedPost = await Post.destroy({
        where: {
          id: postId,
          user_id: req.user.id, // Ensure that the logged-in user owns the post
        },
      });
      if (!deletedPost) {
        return res.status(404).json({ message: 'No post found with this id' });
      }
      res.status(200).json(deletedPost);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
};

module.exports = postController;
