const postUser = require("../../api/user/postUser");
const router = require("express").Router();

router.post("/user", postUser);

module.exports = router;
