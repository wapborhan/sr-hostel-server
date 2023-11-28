const ReqMeals = require("../../models/ReqMeals");

const findAllServMeals = async (filter) => {
  const cursor = await ReqMeals.find(filter);

  return cursor;
};

module.exports = findAllServMeals;
