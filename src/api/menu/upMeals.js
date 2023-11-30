const upMealsData = require("../../lib/menu/upMealsData");
var ObjectId = require("mongoose").Types.ObjectId;

const upMeals = async (req, res) => {
  const id = req.params.id;
  const updateData = req.body;
  const filter = { _id: new ObjectId(id) };

  const allMeals = await upMealsData(filter, updateData);
  res.send(allMeals);
};

module.exports = upMeals;
