const passport = require('passport');

// ...

router.post('/login', passport.authenticate('local'), (req, res) => {
  // Successful authentication, handle the response
  res.json({ message: 'Login successful', user: req.user });
});
