const createIntent = require("../../api/payment/createIntent");

const router = require("express").Router();

router.post("/payment-intent", createIntent);

module.exports = router;
