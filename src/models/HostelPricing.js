const mongoose = require("mongoose");

const hostelPricingSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  plan_name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  pack_details: {
    type: [String],
    required: true,
  },
});

const HostelPricing = mongoose.model("pricings", hostelPricingSchema);

module.exports = HostelPricing;
