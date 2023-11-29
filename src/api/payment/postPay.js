const updateUser = require("../../lib/user/updateUser");

const postPay = async (req, res) => {
  const payment = req.body;

  const upUserData = updateUser(payment);

  res.send(upUserData);
};

module.exports = postPay;
