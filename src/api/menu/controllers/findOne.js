const findOneMenu = require("../../../lib/menu/findOneMenu");
var ObjectId = require("mongoose").Types.ObjectId;

const findOne = async (req, res) => {
  const id = req.params.id;
  const filter = { _id: new ObjectId(id) };
  const OneMeals = await findOneMenu(filter);
  res.send(OneMeals);
};

module.exports = findOne;
