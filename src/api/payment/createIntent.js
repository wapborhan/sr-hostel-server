//
const findAdminUser = require("../../lib/user/findAdminUser");

const createIntent = async (req, res) => {
  const { subscription } = req.body;

  const allUsers = await findAdminUser(query);
  res.send(allUsers);
};

module.exports = createIntent;
