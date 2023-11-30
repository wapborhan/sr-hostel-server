const findUser = require("../../api/user/findUser");

const router = require("express").Router();

router.get("/user/:email", findUser);

module.exports = router;
