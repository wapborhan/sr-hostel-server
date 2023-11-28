const findAllServMeals = require("../../lib/menu/findAllServMeals");

const findAllServ = async (req, res) => {
  const allServices = await findAllServMeals();
  res.send(allServices);
};

module.exports = findAllServ;
