const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all comments
router.get('/', async (req, res) => {
  try {
    const dbCommentData = await Comment.findAll({});
    res.json(dbCommentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// POST a new comment
router.post('/', withAuth, async (req, res) => {
  // check the session
  if (req.session) {
    try {
      const dbCommentData = await Comment.create({
        text: req.body.text,
        post_id: req.body.post_id,
        // use the id from the session
        user_id: req.session.user_id,
      });
      res.json(dbCommentData);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }
});

// DELETE a comment by id
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const dbCommentData = await Comment.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!dbCommentData) {
      res.status(404).json({ message: 'No comment found with this id' });
      return;
    }
    res.json(dbCommentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
