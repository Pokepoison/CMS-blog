const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        text: "is amazing!"
    },
    {
        user_id: 4,
        post_id: 4,
        text: "Dude, great work!"
    },
    {
        user_id: 1,
        post_id: 4,
        text: "Awesome! everyone that contributed"
    },
    {
        user_id: 3,
        post_id: 5,
        text: "I need million subscribers!"
    },
    {
        user_id: 3,
        post_id: 2,
        text: "This is the our great news!"
    },
    {
        user_id: 3,
        post_id: 4,
        text: "The biggest and the most awaited feature is about robots!"
    },
    {
        user_id: 5,
        post_id: 3,
        text: "You are good at that!"
    },
    {
        user_id: 2,
        post_id: 1,
        text: "You have a nice smile!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;