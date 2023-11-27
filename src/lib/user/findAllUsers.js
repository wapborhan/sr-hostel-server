const AllUser = require("../../models/AllUser");

const findAllUsers = async () => {
  const cursor = await AllUser.find();

  return cursor;
};

module.exports = findAllUsers;
