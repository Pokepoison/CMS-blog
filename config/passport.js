const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../models');
const bcrypt = require('bcryptjs');

module.exports = (passport) => {
  // Serialize user data to store in the session
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // Deserialize user data to retrieve from the session
  passport.deserializeUser((id, done) => {
    User.findByPk(id)
      .then((user) => {
        done(null, user);
      })
      .catch((err) => {
        done(err, null);
      });
  });

  // Configure the local strategy for login
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'username', // Field for username in the login form
        passwordField: 'password', // Field for password in the login form
      },
      async (username, password, done) => {
        try {
          // Find a user with the provided username
          const user = await User.findOne({ where: { username } });

          // If no user is found, return an error
          if (!user) {
            return done(null, false, { message: 'Incorrect username' });
          }

          // Compare the provided password with the hashed password in the database
          const isMatch = await bcrypt.compare(password, user.password);

          // If the passwords match, return the user object
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: 'Incorrect password' });
          }
        } catch (err) {
          return done(err);
        }
      }
    )
  );
};
