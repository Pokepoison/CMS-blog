const { Comment } = require('../../models');

const commentController = {
  // Controller function to create a new comment on a blog post
  createComment: async (req, res) => {
    try {
      const newComment = await Comment.create({
        text: req.body.text,
        user_id: req.session.user_id,
        post_id: req.body.post_id,
      });

      res.status(200).json(newComment);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },

  // Controller function to update a comment by ID
  updateComment: async (req, res) => {
    try {
      const updatedComment = await Comment.update(
        {
          text: req.body.text,
        },
        {
          where: {
            id: req.params.id,
            user_id: req.session.user_id,
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
  },

  // Controller function to delete a comment by ID
  deleteComment: async (req, res) => {
    try {
      const deletedComment = await Comment.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
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
  },
};

module.exports = commentController;
