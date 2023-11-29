const AllUser = require("../../models/AllUser");

const makeUserAdminData = async (filter) => {
  const update = { role: "admin" };
  let cursor = await AllUser.findOneAndUpdate(filter, update);
  return cursor;
};

module.exports = makeUserAdminData;
