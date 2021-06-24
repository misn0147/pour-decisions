const router = require('express').Router();

const userRoutes = require('./user-routes');
const wineryRoutes = require('./winery-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/wineries', wineryRoutes);
router.use('/comments', commentRoutes);

module.exports = router;