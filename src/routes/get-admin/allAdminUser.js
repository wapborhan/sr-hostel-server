const findAdmin = require("../../api/user/findAdmin");

const router = require("express").Router();

router.get("/user/admin/:email", findAdmin);

module.exports = router;
