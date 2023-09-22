const { User } = require('../models');

const userData = [
    {
        username: "mark_b",
        email: "mark_b@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "shaunt_c",
        email: "shaunt_c@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "lee_n",
        email: "norris_l@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "jord_r",
        email: "jord_r@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "matt_b",
        email: "mathew_b@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "bopa",
        email: "bopa@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;