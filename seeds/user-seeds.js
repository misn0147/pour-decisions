const sequelize = require('../config/connection');
const { User, Winery } = require('../models');

const userdata = [
  {
    username: 'admin',
    email: 'admin@admin.com',
    password: 'admin'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;