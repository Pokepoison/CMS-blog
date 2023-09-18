const router = require('express').Router();
const { Post, User, Comment } = require('../models');

// Route to render the homepage
router.get('/', async (req, res) => {
  try {
    // Fetch existing blog posts from the database
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          attributes: ['text', 'user_id', 'createdAt'],
          include: {
            model: User,
            attributes: ['username'],
          },
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    // Render the homepage view and pass the posts data to it
    res.render('home', { posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Add more HTML routes as needed

module.exports = router;
