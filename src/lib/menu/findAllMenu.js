const Menu = require("../../models/Menu");

const findAllMenu = async () => {
  const cursor = await Menu.find();

  return cursor;
};

module.exports = findAllMenu;
