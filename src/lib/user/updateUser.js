const AllUser = require("../../models/AllUser");

const updateUser = async (payment) => {
  const filter = { email: payment?.email };
  const update = { subscription: payment?.subscription };

  let cursor = await AllUser.findOneAndUpdate(filter, update);
  return cursor;
};

module.exports = updateUser;
