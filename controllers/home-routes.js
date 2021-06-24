const router = require('express').Router();
const sequelize = require('../config/connection');
const { Winery, User, Comment} = require('../models');


// get all posts for homepage
router.get('/', (req, res) => {

});


module.exports = router;