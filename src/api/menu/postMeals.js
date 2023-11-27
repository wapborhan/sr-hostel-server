const postMealsData = require("../../lib/menu/postMealsData");

const postMeals = async (req, res) => {
  const meals = req.body;

  const result = postMealsData(meals);

  res.send(result);
};

module.exports = postMeals;
