const { Post } = require('../../models');

const postController = {
  // Controller function to create a new blog post
  createPost: async (req, res) => {
    try {
      const newPost = await Post.create({
        title: req.body.title,
        content: req.body.content,
        user_id: req.session.user_id,
      });

      res.status(200).json(newPost);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },

  // Controller function to update a blog post by ID
  updatePost: async (req, res) => {
    try {
      const updatedPost = await Post.update(
        {
          title: req.body.title,
          content: req.body.content,
        },
        {
          where: {
            id: req.params.id,
            user_id: req.session.user_id,
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
  },

  // Controller function to delete a blog post by ID
  deletePost: async (req, res) => {
    try {
      const deletedPost = await Post.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
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
  },
};

module.exports = postController;
