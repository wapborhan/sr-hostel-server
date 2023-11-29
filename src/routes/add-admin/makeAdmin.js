const makeUserAdmin = require("../../api/user/makeUserAdmin");

const router = require("express").Router();

router.patch("/users/admin/:id", makeUserAdmin);

module.exports = router;
