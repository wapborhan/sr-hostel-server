const postUpMealsData = require("../../lib/menu/postUpMealsData");

const postMeals = async (req, res) => {
  const meals = req.body;

  const result = postUpMealsData(meals);

  res.send(result);
};

module.exports = postMeals;
