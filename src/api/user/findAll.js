const findAllUsers = require("../../lib/user/findAllUsers");

const findAll = async (req, res) => {
  const allUsers = await findAllUsers();
  res.send(allUsers);
};

module.exports = findAll;
