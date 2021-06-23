const Comment = require('./Comment');
const User = require('./User');
const Winery = require('./Winery');

// create associations
Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

/*
Winery.hasMany(Comment, {
    foreignKey: 'winery_id'
});
*/

/*
Comment.belongsTo(Winery, {
    foreignKey: 'winery_id',
    onDelete: 'SET NULL'
});
*/

/*
Winery.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
*/

/*User.hasMany(Winery, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
*/

module.exports = {
    Comment,
    User,
    Winery
};