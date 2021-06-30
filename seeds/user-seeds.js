const sequelize = require("../config/connection");
const { User, Winery } = require("../models");

const userdata = [
  {
    username: "Todd",
    email: "admin@admin.com",
    password: "admin",
  },
  {
    username: "Mike",
    email: "admin2@admin2.com",
    password: "admin2",
  },
  {
    username: "Sara",
    email: "admin3@admin3.com",
    password: "admin3",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
