const Menu = require("../../models/Menu");

const delMealsData = async (filter) => {
  const cursor = await Menu.deleteOne(filter);
  return cursor;
};

module.exports = delMealsData;
