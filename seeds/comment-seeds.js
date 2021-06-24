const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'The vineyard is very nice!',
    user_id: 1,
    winery_id: 3
  },
  {
    comment_text: 'The people were very friendly!',
    user_id: 1,
    winery_id: 5
  },
  {
    comment_text: 'The wine tasted bad!',
    user_id: 1,
    winery_id: 10
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;