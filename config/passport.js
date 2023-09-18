const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../models'); // Assuming you've defined the User model

// Define the local strategy
passport.use(
  new LocalStrategy(
    {
      usernameField: 'username', // Field name for username in the login form
      passwordField: 'password', // Field name for password in the login form
    },
    async (username, password, done) => {
      try {
        // Find the user with the given username
        const user = await User.findOne({ where: { username } });

        // If the user doesn't exist or the password is incorrect, return an error
        if (!user || !user.checkPassword(password)) {
          return done(null, false, { message: 'Incorrect username or password' });
        }

        // If the user exists and the password is correct, return the user
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

// Serialize user data to store in the session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user data from the session
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return done(null, false, { message: 'User not found' });
    }
    return done(null, user);
  } catch (error) {
    return done(error);
  }
});

module.exports = passport;
