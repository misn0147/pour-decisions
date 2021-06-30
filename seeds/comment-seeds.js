const { Comment } = require("../models");

const commentdata = [
  {
    comment_text: "The vineyard is very nice!",
    user_id: 1,
    winery_id: 3,
  },
  {
    comment_text: "The people were very friendly!",
    user_id: 3,
    winery_id: 5,
  },
  {
    comment_text: "The wine tasted bad!",
    user_id: 2,
    winery_id: 4,
  },
  {
    comment_text: "The wine was great!",
    user_id: 1,
    winery_id: 10,
  },
  {
    comment_text: "The vineyard was beautiful!",
    user_id: 1,
    winery_id: 1,
  },
  {
    comment_text: "The wine people were rude!",
    user_id: 2,
    winery_id: 14,
  },
  {
    comment_text: "The wine was green!",
    user_id: 3,
    winery_id: 17,
  },
  {
    comment_text: "The wine had flies in it!",
    user_id: 3,
    winery_id: 2,
  },
  {
    comment_text: "The vines were dead!",
    user_id: 1,
    winery_id: 44,
  },
  {
    comment_text: "The people were nice!",
    user_id: 2,
    winery_id: 3,
  },
  {
    comment_text: "The weather was bad!",
    user_id: 1,
    winery_id: 31,
  },
  {
    comment_text: "There was no cheese!",
    user_id: 3,
    winery_id: 23,
  },
  {
    comment_text: "It was soo expensive!",
    user_id: 2,
    winery_id: 3,
  },
  {
    comment_text: "It was a great value!",
    user_id: 2,
    winery_id: 6,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
