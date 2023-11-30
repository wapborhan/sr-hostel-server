const ReqMeals = require("../../models/ReqMeals");

const upReqMealsData = async (filter, updateData) => {
  console.log(updateData?.status);
  const update = {
    status: updateData?.status,
  };
  let cursor = await ReqMeals.findOneAndUpdate(filter, update);

  return cursor;
};

module.exports = upReqMealsData;
