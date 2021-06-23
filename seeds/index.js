const seedUsers = require('./user-seeds');
//console.log('seedUsers');
const seedWineries = require('./winery-seeds');
//console.log('seedWineries');
//const seedComments = require('./comment-seeds');
//console.log('seedComments');

const sequelize = require('../config/connection');
const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  // console.log('--------------');

  await seedComments();
  // console.log('--------------');

  await seedWineries();
  //console.log('--------------');


  process.exit(0);
};

seedAll();