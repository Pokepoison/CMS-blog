const router = require('express').Router();
const passport = require('passport');

// Import necessary models and any other required dependencies
const { User } = require('../models');

// Define routes and their corresponding controller functions
router.post('/login', passport.authenticate('local'), (req, res) => {
  // Successful login
  res.json({ message: 'Login successful', user: req.user });
});

router.post('/signup', async (req, res) => {
  try {
    // Create a new user in the database
    const userData = await User.create(req.body);

    // Log the user in after successful signup
    req.login(userData, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json(err);
      }
      res.json({ message: 'Signup successful', user: userData });
    });
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  // Log the user out
  req.logout();
  res.json({ message: 'Logout successful' });
});

// Add more routes and controller functions as needed

module.exports = router;
