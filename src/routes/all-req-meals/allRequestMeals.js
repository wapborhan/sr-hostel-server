const findAllReq = require("../../api/menu/findAllReq");

const router = require("express").Router();

router.get("/reqmeals", findAllReq);

module.exports = router;
