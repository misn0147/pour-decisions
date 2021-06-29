const { Comment } = require("../models");

const commentdata = [
  {
    comment_text: "The vineyard is very nice!",
    user_id: 2,
    winery_id: 3,
  },
  {
    comment_text: "The wine tasted good!",
    user_id: 3,
    winery_id: 3,
  },
  {
    comment_text: "The people were friendly!",
    user_id: 1,
    winery_id: 3,
  },
  {
    comment_text: "I agree the vineyard is very nice!",
    user_id: 1,
    winery_id: 3,
  },
  {
    comment_text: "The people were very friendly!",
    user_id: 1,
    winery_id: 5,
  },
  {
    comment_text: "The vines were pretty!",
    user_id: 1,
    winery_id: 10,
  },
  {
    comment_text: "The wine was green!",
    user_id: 1,
    winery_id: 15,
  },
  {
    comment_text: "The wine tasted like cheese!",
    user_id: 1,
    winery_id: 30,
  },
  {
    comment_text: "The vineyard was beautiful!",
    user_id: 1,
    winery_id: 21,
  },
  {
    comment_text: "The wine tasted fruity!",
    user_id: 1,
    winery_id: 35,
  },
  {
    comment_text: "The venue was great!",
    user_id: 1,
    winery_id: 52,
  },
  {
    comment_text: "The wine tasted awful!",
    user_id: 1,
    winery_id: 6,
  },
  {
    comment_text: "The wine tasted questionable!",
    user_id: 1,
    winery_id: 8,
  },
  {
    comment_text: "The hosts were mean!",
    user_id: 1,
    winery_id: 11,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
