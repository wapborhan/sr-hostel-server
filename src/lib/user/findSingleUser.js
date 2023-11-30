//
const AllUser = require("../../models/AllUser");

const findSingleUser = async (filter) => {
  const user = await AllUser.findOne(filter);
  return user;
};

module.exports = findSingleUser;
