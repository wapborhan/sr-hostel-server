//
const findAdminUser = require("../../lib/user/findAdminUser");

const findAdmin = async (req, res) => {
  const email = req.params.email;
  const query = { email: email };
  const allUsers = await findAdminUser(query);
  res.send(allUsers);
};

module.exports = findAdmin;
