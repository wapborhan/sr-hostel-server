//
const UpMenu = require("../../models/UpMenu");

const findAllUpMeals = async () => {
  const cursor = await UpMenu.find();

  return cursor;
};

module.exports = findAllUpMeals;
