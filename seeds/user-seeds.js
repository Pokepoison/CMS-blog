const { User } = require('../models');

const userData = [
    {
        username: "mark_b",
        twitter: "markb",
        github: "markb",
        email: "mark_b@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "shaunt_c",
        twitter: "shaunt",
        github: "shauny",
        email: "shaunt_c@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "lee_n",
        twitter: "norris",
        github: "norris",
        email: "norris_l@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "jord_r",
        twitter: "friendi23",
        github: "friendi23",
        email: "jord_r@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "matt_b",
        twitter: "mathewb",
        github: "mathewb",
        email: "mathew_b@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "bopa",
        twitter: "bopa_w",
        github: "bopa",
        email: "bopa@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;