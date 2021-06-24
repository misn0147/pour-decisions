const router = require('express').Router();
const sequelize = require('../config/connection');
const { Winery, User, Comment} = require('../models');
const withAuth = require('../utils/auth');

// get all posts for dashboard
router.get('/', withAuth, (req, res) => {

});


module.exports = router;
