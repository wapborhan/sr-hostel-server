const findSingleUser = require("../../lib/user/findSingleUser");
var ObjectId = require("mongoose").Types.ObjectId;

const findUser = async (req, res) => {
  const email = req.params.email;
  const filter = { email: email };
  const allUsers = await findSingleUser(filter);
  res.send(allUsers);
};

module.exports = findUser;
