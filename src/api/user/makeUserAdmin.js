const makeUserAdminData = require("../../lib/user/makeUserAdminData");
var ObjectId = require("mongoose").Types.ObjectId;

const makeUserAdmin = async (req, res) => {
  const id = req.params.id;
  const filter = { _id: new ObjectId(id) };

  const userData = makeUserAdminData(filter);

  res.send(userData);
};

module.exports = makeUserAdmin;
