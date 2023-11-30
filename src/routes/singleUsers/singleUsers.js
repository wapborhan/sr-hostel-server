const findUser = require("../../api/user/findUser");

const router = require("express").Router();

router.get("/user/:id", findUser);

module.exports = router;
