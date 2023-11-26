const findAll = require("../../api/menu/controllers/findAll");

const router = require("express").Router();

router.get("/menu", findAll);

module.exports = router;
