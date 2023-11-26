const postUserData = require("../../lib/user/postUserData");

const postUser = async (req, res) => {
  const user = req.body;

  const userData = postUserData(user);

  res.send(userData);
};

module.exports = postUser;
