//
const upReqMealsData = require("../../lib/menu/upReqMealsData");
var ObjectId = require("mongoose").Types.ObjectId;

const upReqMeals = async (req, res) => {
  const id = req.params.id;
  const updateData = req.body;
  const filter = { _id: new ObjectId(id) };

  const allMeals = await upReqMealsData(filter, updateData);
  res.send(allMeals);
};

module.exports = upReqMeals;
