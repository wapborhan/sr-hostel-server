const findAll = require("../../api/user/findAll");

const router = require("express").Router();

router.get("/user", findAll);

module.exports = router;
