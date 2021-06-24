const sequelize = require('../config/connection');
const { User, Winery } = require('../models');

const userdata = [
  {
    username: 'admin',
    email: 'admin@admin.com',
    password: 'admin'
  },
  {
    username: 'admin2',
    email: 'admin2@admin2.com',
    password: 'admin2'
  },
  {
    username: 'admin3',
    email: 'admin3@admin3.com',
    password: 'admin3'
  },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;