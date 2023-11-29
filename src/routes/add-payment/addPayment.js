const postPay = require("../../api/payment/postPay");

const router = require("express").Router();

router.post("/payments", postPay);

module.exports = router;
