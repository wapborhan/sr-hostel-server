const findALlUp = require("../../api/menu/findALlUp");

const router = require("express").Router();

router.get("/upcoming", findALlUp);

module.exports = router;
