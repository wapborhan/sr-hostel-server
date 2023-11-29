const findAllPricing = require("../../lib/pricing/findAllPricing");

const findPricing = async (req, res) => {
  const path = req.params.path;
  const filter = { path: path };
  const allServices = await findAllPricing(filter);
  res.send(allServices);
};
module.exports = findPricing;
