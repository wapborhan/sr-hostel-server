//
const postReqMealsData = require("../../lib/menu/postReqMealsData");

const postReqMeals = async (req, res) => {
  const meals = req.body;

  const result = postReqMealsData(meals);

  res.send(result);
};

module.exports = postReqMeals;
