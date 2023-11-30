const findSingleUser = require("../../lib/user/findSingleUser");
var ObjectId = require("mongoose").Types.ObjectId;

const findUser = async (req, res) => {
  const id = req.params.id;
  const filter = { _id: new ObjectId(id) };
  const allUsers = await findSingleUser(filter);
  res.send(allUsers);
};

module.exports = findUser;
