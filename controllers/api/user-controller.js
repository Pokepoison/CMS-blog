const { User } = require('../../models');

const userController = {
  // Controller function for user login
  login: (req, res) => {
    // The user is authenticated at this point
    res.json({ message: 'Login successful', user: req.user });
  },

  // Controller function for user signup
  signup: async (req, res) => {
    try {
      const newUser = await User.create(req.body);
      res.json({ message: 'Signup successful', user: newUser });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },

  // Controller function for user logout
  logout: (req, res) => {
    req.logout();
    res.json({ message: 'Logout successful' });
  },
};

module.exports = userController;
