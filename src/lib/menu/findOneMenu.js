const SingleMenu = require("../../models/SingleMenu");

const findOneMenu = async (filter) => {
  const meal = await SingleMenu.findOne(filter);
  return meal;
};

module.exports = findOneMenu;
