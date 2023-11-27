const Menu = require("../../models/Menu");

const findOneMenu = async (filter) => {
  const meal = await Menu.findOne(filter);
  return meal;
};

module.exports = findOneMenu;
