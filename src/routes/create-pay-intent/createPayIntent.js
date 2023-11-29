const createIntent = require("../../api/user/createIntent");

const router = require("express").Router();

router.post("/payment-intent", createIntent);

module.exports = router;
