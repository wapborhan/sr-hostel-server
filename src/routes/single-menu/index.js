const findOne = require("../../api/menu/controllers/findOne");

const router = require("express").Router();

router.get("/menu/:id", findOne);

module.exports = router;
