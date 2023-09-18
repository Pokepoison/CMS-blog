const { User } = require('../../models');
const bcrypt = require('bcryptjs');

const userController = {
  signup: async (req, res) => {
    try {
      const { username, password } = req.body;
      // Check if the username already exists
      const existingUser = await User.findOne({ where: { username } });
      if (existingUser) {
        return res.status(400).json({ message: 'Username already exists' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      const newUser = await User.create({
        username,
        password: hashedPassword,
      });

      req.login(newUser, (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json(err);
        }
        res.status(200).json({ message: 'Signup successful', user: newUser });
      });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },

  login: async (req, res) => {
    // User is already authenticated at this point
    res.json({ message: 'Login successful', user: req.user });
  },

  logout: (req, res) => {
    req.logout();
    res.json({ message: 'Logout successful' });
  },
};

module.exports = userController;
