const findAllUpMeals = require("../../lib/menu/findAllUpMeals");

const findALlUp = async (req, res) => {
  const allServices = await findAllUpMeals();
  res.send(allServices);
};

module.exports = findALlUp;
