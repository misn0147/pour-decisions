const router = require('express').Router();
const { Winery, User, Comment } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');



router.get('/', (req, res) => {

});


module.exports = router; 