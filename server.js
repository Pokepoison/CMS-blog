const express = require('express');
const session = require('express-session');
const passport = require('passport');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection'); // Make sure to import your Sequelize configuration
const routes = require('./routes'); // Import your defined routes
const path = require('path'); // Import the path module

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize Passport.js
require('./config/passport')(passport); 
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Serve static files (CSS, JavaScript, images, etc.) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Set up Handlebars as your view engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Include the defined routes
app.use(routes);

// Start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
