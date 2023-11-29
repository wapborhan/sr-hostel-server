const HostelPricing = require("../../models/HostelPricing");

const findAllPricing = async (filter) => {
  const selectPack = await HostelPricing.findOne(filter);
  if (!selectPack) {
    return { message: "Hostel pricing not found" };
  }
  return selectPack;
};
module.exports = findAllPricing;
