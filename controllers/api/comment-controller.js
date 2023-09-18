const { Comment } = require('../../models');

const commentController = {
  createComment: async (req, res) => {
    try {
      const { text, post_id } = req.body;
      const newComment = await Comment.create({
        text,
        user_id: req.user.id, // Assign the logged-in user's ID to the comment
        post_id,
      });
      res.status(200).json(newComment);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },

  updateComment: async (req, res) => {
    try {
      const { text } = req.body;
      const commentId = req.params.id;
      const updatedComment = await Comment.update(
        {
          text,
        },
        {
          where: {
            id: commentId,
            user_id: req.user.id, // Ensure that the logged-in user owns the comment
          },
        }
      );
      if (!updatedComment[0]) {
        return res.status(404).json({ message: 'No comment found with this id' });
      }
      res.status(200).json(updatedComment);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },

  deleteComment: async (req, res) => {
    try {
      const commentId = req.params.id;
      const deletedComment = await Comment.destroy({
        where: {
          id: commentId,
          user_id: req.user.id, // Ensure that the logged-in user owns the comment
        },
      });
      if (!deletedComment) {
        return res.status(404).json({ message: 'No comment found with this id' });
      }
      res.status(200).json(deletedComment);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
};

module.exports = commentController;
