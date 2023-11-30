//
const AllUser = require("../../models/AllUser");

const findAdminUser = async (filter) => {
  const user = await AllUser.findOne(filter);
  return user;
};

module.exports = findAdminUser;
