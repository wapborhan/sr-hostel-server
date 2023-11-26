const findAllMenu = require("../../../lib/menu/findAllMenu");

const findAll = async (req, res) => {
  const allServices = await findAllMenu();
  res.send(allServices);
};

module.exports = findAll;
