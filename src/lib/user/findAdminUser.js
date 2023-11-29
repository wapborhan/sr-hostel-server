//
const AllUser = require("../../models/AllUser");

const findAdminUser = async (query) => {
  const user = await AllUser.find(query);
  let admin = false;
  let subscription = false;
  if (user) {
    admin = user[0].role === "admin";
  }
  if (user) {
    subscription =
      user[0].subscription === "silver" ||
      user[0].subscription === "gold" ||
      user[0].subscription === "platinum";
  }
  return { admin, subscription };
};

module.exports = findAdminUser;
