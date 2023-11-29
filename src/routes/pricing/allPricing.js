const findPricing = require("../../api/pricing/findPricing");

const router = require("express").Router();
router.get("/pricing/:path", findPricing);
module.exports = router;
