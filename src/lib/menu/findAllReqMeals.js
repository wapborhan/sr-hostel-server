const ReqMeals = require("../../models/ReqMeals");

const findAllReqMeals = async (filter) => {
  const cursor = await ReqMeals.find(filter);

  return cursor;
};

module.exports = findAllReqMeals;
