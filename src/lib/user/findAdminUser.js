//
const AllUser = require("../../models/AllUser");

const findAdminUser = async (query) => {
  const user = await AllUser.find(query);
  let admin = false;
  if (user) {
    admin = user[0].role === "admin";
  }
  return admin;
};

module.exports = findAdminUser;
