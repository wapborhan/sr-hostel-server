const delMealsData = require("../../lib/menu/delMealsData");
var ObjectId = require("mongoose").Types.ObjectId;

const delMeals = async (req, res) => {
  const id = req.params.id;
  const filter = { _id: new ObjectId(id) };

  const allMeals = await delMealsData(filter);
  res.send(allMeals);
};

module.exports = delMeals;
