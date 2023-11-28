const findAllReqMeals = require("../../lib/menu/findAllReqMeals");

const findAllReq = async (req, res) => {
  const email = req.query.email;
  const filter = { req_email: email };
  const allServices = await findAllReqMeals(filter);
  res.send(allServices);
};

module.exports = findAllReq;
