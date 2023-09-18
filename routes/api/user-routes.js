// const passport = require('passport');

// // ...

// router.post('/login', passport.authenticate('local'), (req, res) => {
//   // Successful authentication, handle the response
//   res.json({ message: 'Login successful', user: req.user });
// });

const router = require('express').Router();
const passport = require('passport');

// Include the user controller
const userController = require('../../controllers/api/user-controller');

// Route to log in a user
router.post('/login', passport.authenticate('local'), userController.login);

// Route to sign up a new user
router.post('/signup', userController.signup);

// Route to log out a user
router.post('/logout', userController.logout);

module.exports = router;
