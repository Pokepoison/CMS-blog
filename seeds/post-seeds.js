const { Post } = require('../models');

const postData = [
    {
        title: "Time-Management goes public!",
        content: "Time-Management is a task-tracker app that will allow you to organize your personal to-do list items by clicking and writing events down to the event calender.",
        user_id: 2
    },
    {
        title: "CMS-blog-app has been released!",
        content: "A CMS-style blog site allows developers to publish their blog posts and comment on other developers’ posts. This webpageis similar to a Wordpress site. The app follows MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication",
        user_id: 1
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;